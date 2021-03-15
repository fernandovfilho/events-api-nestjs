import { IsNotEmpty, IsString } from "class-validator";

export class CreateProductCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
