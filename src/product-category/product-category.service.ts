import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Company } from "src/company/company.entity";
import { CreateProductCategoryDto } from "./dto/create-product-category.dto";
import { ProductCategoryRepository } from "./product-category.repository";

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategoryRepository)
    private productCategoryRepository: ProductCategoryRepository
  ) {}

  make(createProductCategoryDto: CreateProductCategoryDto, company: Company) {
    return this.productCategoryRepository.make(
      createProductCategoryDto,
      company
    );
  }
}
