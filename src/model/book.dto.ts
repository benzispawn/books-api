/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsEmail, IsDate, IsISO8601, IsInt } from "class-validator";

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  public  name: string;
  @IsISO8601()
  public date: Date;

  @IsInt()
  idCli: number
}