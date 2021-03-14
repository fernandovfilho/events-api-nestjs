import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./dto/create-company.dto";

@Controller("company")
export class CompanyController {
  constructor(private companyService: CompanyService) {}
  @Post("/")
  @UseGuards(AuthGuard())
  make(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.make(createCompanyDto);
  }
}
