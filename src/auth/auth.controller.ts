import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dto/login-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createUser(@Body() loginUserDto: LoginUserDto): Promise<any> {
    const token = await this.authService.validateUser(loginUserDto);
    return { token };
  }
}
