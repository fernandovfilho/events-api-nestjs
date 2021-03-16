import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Company } from "src/domains/company/company.entity";
import { CreateProductCategoryDto } from "./dto/create-product-category.dto";
import { UpdateProductCategoryDto } from "./dto/update-product-category.dto";
import { ProductCategoryRepository } from "./product-category.repository";

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategoryRepository)
    private productCategoryRepository: ProductCategoryRepository
  ) {}

  post(createProductCategoryDto: CreateProductCategoryDto, company: Company) {
    return this.productCategoryRepository.post(
      createProductCategoryDto,
      company
    );
  }

  getAll(company: Company) {
    return this.productCategoryRepository.getAll(company);
  }

  getById(company: Company, productCategoryId: number) {
    return this.productCategoryRepository.getById(company, productCategoryId);
  }

  patch(company: Company, updateProductCategoryDto: UpdateProductCategoryDto) {
    return this.productCategoryRepository.patch(
      company,
      updateProductCategoryDto
    );
  }
}
