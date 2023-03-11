/* eslint-disable prettier/prettier */


// books
import {
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany
} from 'typeorm';
import { Books } from "./books.entity";

@Entity({
    name: 'client', schema: 'books'
})
export class Client {
    
    @PrimaryGeneratedColumn('identity', {name: 'cli_id'})

    id: number;

    @Column({ name: 'cli_name', type: 'character varying', length: 50, nullable: false })
    name: string

    @CreateDateColumn({ name: 'cli_birth', type: 'date', nullable: false})
    birth: Date;

    @Column({ name: 'cli_email', type: 'character varying', length: 255, nullable: true })
    mail: string

    @ManyToMany(type => Books, books => books.client)
    books: Books[]|Books
}

