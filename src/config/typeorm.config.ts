import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from "dotenv";
dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  url:
    process.env.DATABASE_URL ||
    "postgres://zxzerjgc:2Q0Tp9-kwc8L4rnrVj1zbX2eoy0zKRmW@tuffi.db.elephantsql.com:5432/zxzerjgc",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  // synchronize: process.env.NODE_ENV === "development" ? true : false,
  synchronize: false,
};
