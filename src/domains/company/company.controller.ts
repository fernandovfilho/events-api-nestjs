import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { GetUser } from "../auth/get-user.decorator";
import { User } from "../auth/user.entity";
import { Company } from "./company.entity";
import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./dto/create-company.dto";

@Controller("company")
export class CompanyController {
  constructor(private companyService: CompanyService) {}
  @Post("/")
  @UseGuards(AuthGuard())
  @ApiTags("company")
  @ApiOkResponse({ type: Company })
  make(
    @Body(ValidationPipe) createCompanyDto: CreateCompanyDto,
    @GetUser() user: User
  ) {
    return this.companyService.make(createCompanyDto, user);
  }
}
