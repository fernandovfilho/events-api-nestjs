import { ConflictException, Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { getRepository } from "typeorm";
import common from "../config/common.config";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  async getUserByEmail(email: string): Promise<User> {
    const userRepository = getRepository(User);
    return await userRepository.findOne({ email });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const userRepository = getRepository(User);
    const { name, email, password } = createUserDto;
    const user = new User();
    user.name = name;
    user.email = email;

    const hashedPassword = bcrypt.hashSync(password, common.saltRounds);
    user.password = hashedPassword;

    try {
      await userRepository.save(user);
      user.password = undefined;
      return user;
    } catch (error) {
      throw new ConflictException(error.detail);
    }
  }
}
