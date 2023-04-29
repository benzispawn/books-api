import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { ClientService } from '../client/client.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client, ClientLog, CreateClientLogDto } from '../../database/model';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { ClientLogService } from '../client_log/client_log.service';
import { AuthController } from './auth.controller';
@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([Client]),
    TypeOrmModule.forFeature([ClientLog]),
    // TypeOrmModule.forFeature([CreateClientLogDto]),
    JwtModule.register({
      secret: jwtConstants.secret,
      // signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    ClientService,
    ClientLogService,
    JwtStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
