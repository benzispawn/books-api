/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Books, Client } from '../../database/model';
import { ILike, Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


const QUERY_BY_NAME = `
SELECT books.bk_id id
       , books.bk_name name
       , books.bk_reg_date date
    FROM books
    WHERE books.bk_name ILIKE '%$1%'
`

@Injectable()
export class BooksService {
    @InjectRepository(Books)
    private readonly repository: Repository<Books>;
    private readonly repositoryClient: Repository<Client>;

    public getBook(id: number): Promise<Books> {
        return this.repository.findOneBy({ id: id });
    }

    public getBookByName(name: string): Promise<Books[]> {
        console.log('@@ devolvou', name)
        return this.repository.findBy({
            name: ILike(`%${name}%`)
        })
    }

    public getBookWithUser(name: string): Promise<Books[]> {
        return this.repository.createQueryBuilder('books')
            .innerJoinAndMapOne('books.client', Client, 'cli', 'books.cli_id = cli.cli_id')
            .getMany()
    }

    public getBookByIdWithUser(id: number, name: string): Promise<Books[]> {
        return this.repository.createQueryBuilder('books')
          .innerJoinAndMapOne('books.client', Client, 'cli', 'books.cli_id = cli.cli_id')
          .where("books.bk_id = :id", { id: id, name: name })
          .andWhere("cli.cli_name ILIKE :name", { name: `%${name}%` })
          .getMany()
    }

    public getAll(): Promise<Books[]> {
        return this.repository.find();
    }
}
