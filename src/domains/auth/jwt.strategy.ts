import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import commonConfig from "src/config/common.config";
import { JwtPayload } from "./jwt-payload.interface";
import { UserRepository } from "./user.repository";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: commonConfig.jwtSecret,
    });
  }

  async validate(payload: JwtPayload) {
    const { username } = payload;
    const user = this.userRepository.findOne({ email: username });
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}