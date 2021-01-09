import { Module } from "@nestjs/common";
import { EventsModule } from "./events/events.module";
import { ProductsController } from './products/products.controller';

@Module({
  imports: [EventsModule],
  controllers: [ProductsController],
})
export class AppModule {}
