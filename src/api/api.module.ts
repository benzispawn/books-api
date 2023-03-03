import { Module } from '@nestjs/common';
import { UserModule } from './client/client.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [UserModule, BooksModule],
})
export class ApiModule {}
