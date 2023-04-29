import { Module } from '@nestjs/common';
import { UserModule } from './client/client.module';
import { BooksModule } from './books/books.module';
import { ClientService } from './client/client.service';
import { AuthModule } from './auth/auth.module';
import { ClientLogModule } from './client_log/client_log.module';

@Module({
  imports: [UserModule, BooksModule, ClientLogModule],
  // providers: [ClientService],
})
export class ApiModule {}
