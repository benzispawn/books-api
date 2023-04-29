import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ClientService } from '../client/client.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Client, ClientLog } from '../../database/model';
import { ClientLogService } from '../client_log/client_log.service';
import { LoginForm } from "../../app.controller";

@Injectable()
export class AuthService {
  constructor(
    private readonly _service: ClientService,
    private readonly _serviceCreateLog: ClientLogService,

    // private readonly _serviceLog: ClientLog,
    private jwtService: JwtService,
  ) {}

  async validateUser(mail: string, pass: string): Promise<any> {
    console.log('entrou na validacao de usuário');
    const user = await this._service.getClientByEmail(mail);
    const isMatch = await bcrypt.compare(pass, user.pass);
    if (user && isMatch) {
      const { pass, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginForm: LoginForm) {
    console.log('o que ta pegando aqui....');
    const result = await this.validateUser(loginForm.mail, loginForm.pass);
    if (!result) {
      return new UnauthorizedException();
    }
    const sub = await this._serviceCreateLog.createLog({ idClient: result.id });

    const payload = { mail: result.mail, sub: sub.uuid };
    return {
      acess_token: await this.jwtService.signAsync(payload, {
        secret: sub.uuid_secret,
        expiresIn: '15m',
      }),
    };
  }
}
