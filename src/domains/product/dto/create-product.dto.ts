import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  categoryId: number;
}
