/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    Inject,
    Param,
    ParseIntPipe,
    Query,
    UseGuards,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import { BooksService } from './books.service';
import { Books } from '../../database/model';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { BookForm } from "./models";

@Controller('/api/books')
export class BooksController {
    @Inject(BooksService)
    private readonly service: BooksService;

    @UseGuards(JwtAuthGuard)
    @Get()
    public getAll(@Query('name') query: string): Promise<Books[]> {
        if (!!query) {
            return this.service.getBookByName(query);
        }
        return this.service.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    public getBook(@Param('id', ParseIntPipe) id: number, @Query('client') query: string): Promise<Books[]|Books> {
        if (!!query) {
            return this.service.getBookByIdWithUser(id, query);
        }
        return this.service.getBook(id);
    }

    // @UseGuards(JwtAuthGuard)
    // @Get()
    // public getBookByName(@Body() form: BookForm): Promise<Books[]|Books> {
    //     return this.service.getBookByName(form.name);
    // }

}
