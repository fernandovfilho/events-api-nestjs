import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiTags } from "@nestjs/swagger";
import { Company } from "../company/company.entity";
import { GetCompany } from "../company/get-company.decorator";
import { CreateProductDto } from "./dto/create-product.dto";
import { ProductService } from "./product.service";

@Controller("product")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post("/")
  @UseGuards(AuthGuard())
  @ApiTags("product")
  post(
    @Body(ValidationPipe) createProductDto: CreateProductDto,
    @GetCompany() company: Company
  ) {
    return this.productService.post(createProductDto, company);
  }

  @Get("/")
  @UseGuards(AuthGuard())
  @ApiTags("product")
  getAll(@GetCompany() company: Company) {
    return this.productService.getAll(company);
  }
}
