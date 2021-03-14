import {
  ConflictException,
  InternalServerErrorException,
} from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Company } from "./company.entity";
import { CreateCompanyDto } from "./dto/create-company.dto";

@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> {
  async make(createCompanyDto: CreateCompanyDto): Promise<void> {
    const { name, cpfCnpj, phone } = createCompanyDto;

    const company = new Company();
    company.name = name;
    company.cpfCnpj = cpfCnpj;
    company.phone = phone;

    try {
      await company.save();
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("CPF/CNPJ already exists");
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
