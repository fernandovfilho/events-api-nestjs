import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Company } from "src/domains/company/company.entity";
import { GetCompany } from "src/domains/company/get-company.decorator";
import { AuthService } from "./auth.service";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { AuthLoginDto } from "./dto/auth-login.dto";
import { GetUser } from "./get-user.decorator";
import { User } from "./user.entity";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/signup")
  @ApiResponse({ status: 201, type: User })
  @ApiConflictResponse()
  @ApiInternalServerErrorResponse()
  @ApiTags("auth")
  signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post("/signin")
  @ApiTags("auth")
  signIn(@Body(ValidationPipe) authLoginDto: AuthLoginDto) {
    return this.authService.signIn(authLoginDto);
  }

  @Post("/test")
  @UseGuards(AuthGuard())
  @ApiTags("auth")
  test(@GetUser() user: User, @GetCompany() company: Company) {
    console.log(user);
    console.log(company);
  }
}
