import { IsNotEmpty } from "class-validator";

export class LocationDto {
  @IsNotEmpty()
  name: string;
}
