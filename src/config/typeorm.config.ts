import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from "dotenv";
dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  url:
    process.env.DATABASE_URL || "postgres://postgres:1234@localhost:5432/eshop",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: process.env.NODE_ENV === "development" ? true : false,
  // synchronize: false,
};
