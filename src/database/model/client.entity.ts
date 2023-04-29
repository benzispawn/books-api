/* eslint-disable prettier/prettier */


// books
import {
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany, ManyToOne
} from "typeorm";
import { ClientLog } from "./client_log.entity";
import { Books } from "./books.entity";

@Entity({
    name: 'client', schema: 'api'
})
export class Client {
    
    @PrimaryGeneratedColumn('identity', {name: 'cli_id'})
    id: number;

    @Column({ name: 'cli_name', type: 'character varying', length: 50, nullable: false })
    name: string

    @CreateDateColumn({ name: 'cli_birth', type: 'date', nullable: false})
    birth: Date;

    @Column({ name: 'cli_email', type: 'character varying', length: 255, nullable: true })
    mail: string;

    @Column({ name: 'cli_pass', type: 'character varying', length: 255, nullable: false })
    pass: string;

    @ManyToMany(type => Books, books => books.client)
    books: Books[]|Books

    @ManyToOne(type => ClientLog, logs => logs.client)
    logs: ClientLog[] | ClientLog | null;
}

