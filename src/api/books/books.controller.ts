/* eslint-disable prettier/prettier */
import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { BooksService } from './books.service';
import { Books } from '../../model';
import * as process from "process";
import { ApiParam } from "@nestjs/swagger";

@Controller('/api/books')
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

    @Get(':id?/:name')
    @ApiParam({ name: 'name', type: 'string' })
    public getBooksByName(@Param('name') name: string): Promise<Books[]> {
        console.log('@@@ name', name)
        return this.service.getBookByName(name);
    }

    @Get('client/:name')
    public getBooksByUser(@Param('name') name: string): Promise<Books[]> {
        return this.service.getBookWithUser(name);
    }

}
