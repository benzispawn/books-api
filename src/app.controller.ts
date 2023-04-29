import { Controller, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './api/auth/auth.service';
import { JwtAuthGuard } from './api/auth/jwt-auth.guard';
import { IsEmail, IsNotEmpty } from 'class-validator';
export class LoginForm {
  @IsEmail()
  mail: string;
  @IsNotEmpty()
  pass: string;
}
@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
    return {
      teste: 'Deu certo',
    };
  }
}
