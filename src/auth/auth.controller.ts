import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Company } from "src/company/company.entity";
import { GetCompany } from "src/company/get-company.decorator";
import { AuthService } from "./auth.service";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { AuthLoginDto } from "./dto/auth-login.dto";
import { GetUser } from "./get-user.decorator";
import { User } from "./user.entity";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/signup")
  signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post("/signin")
  signIn(@Body(ValidationPipe) authLoginDto: AuthLoginDto) {
    return this.authService.signIn(authLoginDto);
  }

  @Post("/test")
  @UseGuards(AuthGuard())
  test(@GetUser() user: User, @GetCompany() company: Company) {
    console.log(user);
    console.log(company);
  }
}
