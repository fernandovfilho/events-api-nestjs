import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "src/auth/get-user.decorator";
import { User } from "src/auth/user.entity";
import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./dto/create-company.dto";

@Controller("company")
export class CompanyController {
  constructor(private companyService: CompanyService) {}
  @Post("/")
  @UseGuards(AuthGuard())
  make(
    @Body(ValidationPipe) createCompanyDto: CreateCompanyDto,
    @GetUser() user: User
  ) {
    return this.companyService.make(createCompanyDto, user);
  }
}
