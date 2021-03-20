import {
  BadRequestException,
  InternalServerErrorException,
} from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Company } from "../company/company.entity";
import { ProductCategory } from "../product-category/product-category.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from "./product.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async post(createProductDto: CreateProductDto, company: Company) {
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

  async getAll(company: Company): Promise<Product[]> {
    const products = await Product.find({
      where: { company: company.id },
      order: { name: "ASC" },
      relations: ["productCategory"],
    });
    return products;
  }
}
