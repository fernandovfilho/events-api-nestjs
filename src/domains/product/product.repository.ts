import {
  BadRequestException,
  InternalServerErrorException,
} from "@nestjs/common";
import { Company } from "src/domains/company/company.entity";
import { ProductCategory } from "src/domains/product-category/product-category.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from "./product.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async make(createProductDto: CreateProductDto, company: Company) {
    const { name, price, categoryId } = createProductDto;

    try {
      const productCategory = await ProductCategory.findOne({
        where: { id: categoryId, company: company.id },
      });
      if (!productCategory) throw new Error("Category not found");

      const product = new Product();
      product.name = name;
      product.price = price;
      product.company = company;
      product.productCategory = productCategory;

      await product.save();
      product.company = undefined;
      product.productCategory = undefined;
      return product;
    } catch (error) {
      if (error.message) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
