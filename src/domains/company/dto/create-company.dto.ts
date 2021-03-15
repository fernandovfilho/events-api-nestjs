import { IsNotEmpty, IsString } from "class-validator";

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  cpfCnpj: string;
}
