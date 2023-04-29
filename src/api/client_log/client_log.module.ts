import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientLog } from '../../database/model';
import { ClientLogService } from './client_log.service';
import { ClientLogController } from './client_log.controller';

@Module({
  controllers: [ClientLogController],
  exports: [ClientLogService],
  imports: [TypeOrmModule.forFeature([ClientLog])],
  providers: [ClientLogService],
})
export class ClientLogModule {}
