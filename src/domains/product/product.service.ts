import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Company } from "src/domains/company/company.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { ProductRepository } from "./product.repository";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository
  ) {}

  post(createProductDto: CreateProductDto, company: Company) {
    return this.productRepository.post(createProductDto, company);
  }

  getAll(company: Company) {
    return this.productRepository.getAll(company);
  }
}
