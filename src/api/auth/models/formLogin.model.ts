import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginForm {
  @IsEmail()
  mail: string;
  @IsNotEmpty()
  pass: string;
}
