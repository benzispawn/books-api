/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    console.log('basedir', this.config.get<string>('DATABASE_CERT'))
    return {
      type: 'postgres',
      host: this.config.get<string>('DATABASE_HOST'),
      port: this.config.get<number>('DATABASE_PORT'),
      database: this.config.get<string>('DATABASE_NAME'),
      username: this.config.get<string>('DATABASE_USER'),
      password: this.config.get<string>('DATABASE_PASSWORD'),
      entities: [path.join(__dirname, '/../../database/model/*.entity.{ts,js}')],
      migrations: ['dist/migrations/*.{ts,js}'],
      migrationsTableName: 'typeorm_migrations',
      logger: 'file',
      ssl: {
        rejectUnauthorized: false,
        ca: fs.readFileSync(this.config.get<string>('DATABASE_CERT')).toString(),
      },
      synchronize: false, // never use TRUE in production!
    };
  }
}