import {
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
} from "@nestjs/common";
import * as bcrypt from "bcrypt";
import commonConfig from "src/config/common.config";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { AuthLoginDto } from "./dto/auth-login.dto";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { email, password, name } = authCredentialsDto;

    const user = new User();
    user.email = email;
    user.password = await this.hashPassword(password);
    user.name = name;

    try {
      await user.save();
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("Email already exists");
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async signIn(authLoginDto: AuthLoginDto): Promise<User> {
    const { email, password } = authLoginDto;
    const user = await this.findOne({ email });

    if (!user) throw new UnauthorizedException();
    if (!(await this.validatePassword(password, user.password)))
      throw new UnauthorizedException();

    const returnUser = user;
    returnUser.password = undefined;
    return returnUser;
  }

  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hashSync(password, commonConfig.saltRounds);
  }

  private async validatePassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
