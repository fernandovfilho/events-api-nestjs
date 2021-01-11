import { Injectable, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import commonConfig from "src/config/common.config";
import { UsersService } from "src/users/users.service";
import { LoginUserDto } from "./dto/login-user.dto";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  async validateUser(loginUserDto: LoginUserDto): Promise<string> {
    const { email, password } = loginUserDto;
    const user = await this.usersService.getUserByEmail(email);
    if (!user) throw new UnauthorizedException();
    const verify = bcrypt.compareSync(password, user.password);
    if (!verify) throw new UnauthorizedException();
    const token = jwt.sign({ email }, commonConfig.jwtSecret);
    return token;
  }
}
