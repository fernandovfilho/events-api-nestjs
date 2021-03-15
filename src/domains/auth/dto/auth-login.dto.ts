import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class AuthLoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(50)
  password: string;
}
