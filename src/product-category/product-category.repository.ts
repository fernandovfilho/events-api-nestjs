import { InternalServerErrorException } from "@nestjs/common";
import { Company } from "src/company/company.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateProductCategoryDto } from "./dto/create-product-category.dto";
import { ProductCategory } from "./product-category.entity";

@EntityRepository(ProductCategory)
export class ProductCategoryRepository extends Repository<ProductCategory> {
  async make(
    createProductCategoryDto: CreateProductCategoryDto,
    company: Company
  ) {
    const { name } = createProductCategoryDto;
    try {
      const productCategory = new ProductCategory();
      productCategory.name = name;
      productCategory.company = company;
      await productCategory.save();

      productCategory.company = undefined;

      return productCategory;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
