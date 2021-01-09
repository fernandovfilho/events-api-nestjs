import { IsDateString, IsNotEmpty } from "class-validator";

export class CreateEventDto {
  @IsNotEmpty()
  name: string;

  @IsDateString()
  date: Date;

  @IsNotEmpty()
  place: string;

  @IsNotEmpty()
  userId: string;
}
