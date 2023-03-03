/* eslint-disable prettier/prettier */


// books
import { PrimaryGeneratedColumn, Column, CreateDateColumn, Entity, ManyToOne, OneToMany } from "typeorm";
import { Client } from './client.entity';

@Entity({
    name: 'books',
    schema: 'books'
})
export class Books {
    
    @PrimaryGeneratedColumn('identity', { name: 'bk_id' })
    id: number;

    @Column({ type: 'varchar', length: 255, name: 'bk_name' })
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
    idUser: number;

    @ManyToOne(type => Client, client => client.books)
    client: Client

}

