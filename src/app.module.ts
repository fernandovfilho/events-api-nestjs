import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { typeOrmConfig } from "./config/typeorm.config";

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule],
})
export class AppModule {}
