/* eslint-disable prettier/prettier */
import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { BooksService } from './books.service';
import { Books } from '../../model';

@Controller('books')
export class BooksController {
    @Inject(BooksService)
    private readonly service: BooksService;

    @Get()
    public getAll(): Promise<Books[]> {
        return this.service.getAll();
    }

    @Get(':id')
    public getBook(@Param('id', ParseIntPipe) id: number): Promise<Books> {
        return this.service.getBook(id);
    }
}
