/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, Query, UnauthorizedException } from "@nestjs/common";
import { Client } from '../../database/model';
import { AuthService } from "./auth.service";
import { LoginForm } from "./models";
@Controller('api/auth')
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @Post('/')
  async auth(
    @Body() loginForm: LoginForm,
  ): Promise<UnauthorizedException | {acess_token: string}> {
    return this.service.login(loginForm);
  }

}
