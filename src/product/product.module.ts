import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "./product.controller";
import { ProductRepository } from "./product.repository";
import { ProductService } from "./product.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRepository]),
    PassportModule.register({
      defaultStrategy: "jwt",
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [],
})
export class ProductModule {}
