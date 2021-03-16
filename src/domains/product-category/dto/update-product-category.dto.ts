import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateProductCategoryDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;
}
