import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/auth/user.entity";
import { CompanyRepository } from "./company.repository";
import { CreateCompanyDto } from "./dto/create-company.dto";

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyRepository)
    private companyRepository: CompanyRepository
  ) {}

  make(createCompanyDto: CreateCompanyDto, user: User) {
    return this.companyRepository.make(createCompanyDto, user);
  }
}
