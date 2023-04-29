import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../../database/model';

@Module({
  controllers: [ClientController],
  exports: [ClientService],
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [ClientService],
})
export class UserModule {}
