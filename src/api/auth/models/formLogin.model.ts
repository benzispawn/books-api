import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginForm {
  @ApiProperty()
  @IsEmail()
  mail: string;
  @ApiProperty()
  @IsNotEmpty()
  pass: string;
}
