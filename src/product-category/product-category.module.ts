import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductCategoryController } from "./product-category.controller";
import { ProductCategoryRepository } from "./product-category.repository";
import { ProductCategoryService } from "./product-category.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductCategoryRepository]),
    PassportModule.register({
      defaultStrategy: "jwt",
    }),
  ],
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService],
  exports: [],
})
export class ProductCategoryModule {}
