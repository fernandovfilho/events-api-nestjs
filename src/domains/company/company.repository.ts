import {
  ConflictException,
  InternalServerErrorException,
} from "@nestjs/common";
import { User } from "src/domains/auth/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { Company } from "./company.entity";
import { CreateCompanyDto } from "./dto/create-company.dto";

@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> {
  async make(createCompanyDto: CreateCompanyDto, user: User): Promise<Company> {
    const { name, cpfCnpj, phone } = createCompanyDto;

    const company = new Company();
    company.name = name;
    company.cpfCnpj = cpfCnpj;
    company.phone = phone;
    company.userAdmin = user;

    try {
      await company.save();
      company.userAdmin = undefined;
      return company;
    } catch (error) {
      console.log(error);
      if (error.code === "23505") {
        throw new ConflictException("CPF/CNPJ already exists");
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
