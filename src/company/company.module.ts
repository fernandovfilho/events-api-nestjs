import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CompanyController } from "./company.controller";
import { CompanyRepository } from "./company.repository";
import { CompanyService } from "./company.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyRepository]),
    PassportModule.register({
      defaultStrategy: "jwt",
    }),
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [],
})
export class CompanyModule {}
