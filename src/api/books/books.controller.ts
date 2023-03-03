/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    Inject,
    Param,
    ParseIntPipe,
    Post,
    Query,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import { BooksService } from './books.service';
import { Books, Client } from "../../model";
import { CreateUserDto } from "../../model/user.dto";
import { CreateBookDto } from "../../model/book.dto";

@Controller('/api/books')
export class BooksController {
    @Inject(BooksService)
    private readonly service: BooksService;

    @Get()
    public getAll(@Query('name') query: string): Promise<Books[]> {
        if (!!query) {
            return this.service.getBookByName(query);
        }
        return this.service.getAll();
    }

    @Get(':id')
    public getBook(@Param('id', ParseIntPipe) id: number, @Query('client') query: string): Promise<Books[]|Books> {
        if (!!query) {
            return this.service.getBookByIdWithUser(id, query);
        }
        return this.service.getBook(id);
    }

    @Post()
    public createBook(@Body() body: CreateBookDto): Promise<Books> {
        return this.service.createBook(body);
    }

}
