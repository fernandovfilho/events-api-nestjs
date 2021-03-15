import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { CompanyModule } from "./company/company.module";
import { typeOrmConfig } from "./config/typeorm.config";
import { ProductCategoryModule } from "./product-category/product-category.module";
import { ProductModule } from "./product/product.module";

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
