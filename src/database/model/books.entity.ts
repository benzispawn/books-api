/* eslint-disable prettier/prettier */


// books

import { PrimaryGeneratedColumn, Column, CreateDateColumn, Entity, ManyToMany } from 'typeorm';
import { Client } from './client.entity';

@Entity({
    name: 'books',
    schema: 'api'
})
export class Books {

    @PrimaryGeneratedColumn('identity', { name: 'bk_id' })
    id: number;

    @Column({
        type: 'character varying',
        length: 50,
        name: 'bk_name',
        nullable: false
    })
    name: string

    @CreateDateColumn({ 
        type: 'timestamptz', 
        name: 'bk_reg_date', 
        default: () => 'CURRENT_TIMESTAMP' 
    })
    date: Date;

    @Column({ 
        type: 'integer', 
        name: 'cli_id', 
        foreignKeyConstraintName: 'cli_id',
        nullable: true 
    })
    cli_id: number;

    @ManyToMany(type => Client, client => client.books)
    client: Client|Client[]

}

