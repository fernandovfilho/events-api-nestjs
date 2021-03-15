import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { AuthLoginDto } from "./dto/auth-login.dto";
import { JwtPayload } from "./jwt-payload.interface";
import { UserRepository } from "./user.repository";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  signUp(authCredentialsDto: AuthCredentialsDto) {
    return this.userRepository.signUp(authCredentialsDto);
  }

  async signIn(authLoginDto: AuthLoginDto) {
    const user = await this.userRepository.signIn(authLoginDto);

    const payload: JwtPayload = { username: user.email };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
