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
import { CreateProductDto } from "./dto/create-product.dto";
import { ProductService } from "./product.service";

@Controller("product")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post("/")
  @UseGuards(AuthGuard())
  make(
    @Body(ValidationPipe) createProductDto: CreateProductDto,
    @GetCompany() company: Company
  ) {
    return this.productService.make(createProductDto, company);
  }
}
