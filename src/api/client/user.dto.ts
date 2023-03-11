/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsEmail, IsDate, IsISO8601 } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    public name: string;
    @IsEmail()
    public  mail: string;
    // @IsDate()
    @IsISO8601()
    public birth: Date;
}