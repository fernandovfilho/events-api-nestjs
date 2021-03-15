import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as helmet from "helmet";
import "reflect-metadata";
import { AppModule } from "./app.module";

const port = 3000 || process.env.PORT;

async function bootstrap() {
  const logger = new Logger("bootstrap");
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle("eShop API")
    .setDescription("The API to eShop")
    .setVersion("1.0")
    .addTag("shop")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(port, () => {
    logger.log("Server listen at port: " + port);
  });
}
bootstrap();
