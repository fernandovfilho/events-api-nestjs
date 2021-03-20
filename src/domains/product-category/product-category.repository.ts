import {
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Company } from "../company/company.entity";
import { CreateProductCategoryDto } from "./dto/create-product-category.dto";
import { UpdateProductCategoryDto } from "./dto/update-product-category.dto";
import { ProductCategory } from "./product-category.entity";

@EntityRepository(ProductCategory)
export class ProductCategoryRepository extends Repository<ProductCategory> {
  async post(
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

  async getAll(company: Company): Promise<ProductCategory[]> {
    const { id } = company;
    const productCategories = await ProductCategory.find({
      where: { company: id },
      order: { name: "ASC" },
    });
    return productCategories;
  }

  async getById(
    company: Company,
    productCategoryId: number
  ): Promise<ProductCategory> {
    const productCategory = await ProductCategory.findOne({
      where: { id: productCategoryId, company: company.id },
    });
    if (productCategory) {
      return productCategory;
    }
    throw new NotFoundException();
  }

  async patch(
    company: Company,
    updateProductCategoryDto: UpdateProductCategoryDto
  ) {
    try {
      const { name, id } = updateProductCategoryDto;
      const productCategory = await ProductCategory.findOne({
        where: { company: company.id, id },
      });
      if (!productCategory) throw new Error("not_found");
      productCategory.name = name;
      await productCategory.save();
      return productCategory;
    } catch (error) {
      if (error.message === "not_found") {
        throw new NotFoundException();
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
