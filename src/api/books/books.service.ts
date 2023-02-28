/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Books } from '../../model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {
    @InjectRepository(Books)
    private readonly repository: Repository<Books>;

    public getBook(id: number): Promise<Books> {
        return this.repository.findOneBy({ id: id });
    }

    public getBookWithUser(id: number): Promise<Books[]> {
        return this.repository.query('SELECT books.bk_id id, books.bk_name name FROM books.books INNER JOIN books.client ON books.client.cli_id = books.books.cli_id WHERE books.books.bk_id = ?', [
            id
        ])
    }

    public getAll(): Promise<Books[]> {
        return this.repository.find();
    }
}
