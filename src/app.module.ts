import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./config/typeorm.config";
import { AuthModule } from "./domains/auth/auth.module";
import { CompanyModule } from "./domains/company/company.module";
import { ProductCategoryModule } from "./domains/product-category/product-category.module";
import { ProductModule } from "./domains/product/product.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    CompanyModule,
    ProductModule,
    ProductCategoryModule,
  ],
})
export class AppModule {}
