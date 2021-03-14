import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { CompanyModule } from "./company/company.module";
import { typeOrmConfig } from "./config/typeorm.config";

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule, CompanyModule],
})
export class AppModule {}
