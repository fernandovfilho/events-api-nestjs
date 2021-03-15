import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Company } from "src/company/company.entity";
import { GetCompany } from "src/company/get-company.decorator";
import { CreateProductCategoryDto } from "./dto/create-product-category.dto";
import { ProductCategoryService } from "./product-category.service";

@Controller("product/category")
export class ProductCategoryController {
  constructor(private productCategoryService: ProductCategoryService) {}

  @Post("/")
  @UseGuards(AuthGuard())
  make(
    @Body(ValidationPipe) createProductCategoryDto: CreateProductCategoryDto,
    @GetCompany() company: Company
  ) {
    return this.productCategoryService.make(createProductCategoryDto, company);
  }
}
