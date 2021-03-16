import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Company } from "src/domains/company/company.entity";
import { GetCompany } from "src/domains/company/get-company.decorator";
import { CreateProductCategoryDto } from "./dto/create-product-category.dto";
import { UpdateProductCategoryDto } from "./dto/update-product-category.dto";
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
    return this.productCategoryService.post(createProductCategoryDto, company);
  }

  @Get("/")
  @UseGuards(AuthGuard())
  getAll(@GetCompany() company: Company) {
    return this.productCategoryService.getAll(company);
  }

  @Get("/:id")
  @UseGuards(AuthGuard())
  getById(
    @GetCompany() company: Company,
    @Param("id") productCategoryId: number
  ) {
    return this.productCategoryService.getById(company, productCategoryId);
  }

  @Patch("/:id")
  @UseGuards(AuthGuard())
  patch(
    @GetCompany() company: Company,
    @Param("id") productCategoryId: number,
    @Body("name") name: string
  ) {
    const updateProductCategoryDto = new UpdateProductCategoryDto();
    updateProductCategoryDto.id = Number(productCategoryId);
    updateProductCategoryDto.name = name;
    return this.productCategoryService.patch(company, updateProductCategoryDto);
  }
}
