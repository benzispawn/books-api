/* eslint-disable prettier/prettier */


// books
import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

export abstract class BaseEntity {
    
    @PrimaryGeneratedColumn('identity')
    cli_id: number;

    @Column({ type: 'varchar', length: 60 })
    cli_name: string

    @CreateDateColumn({ type: 'date'})
    cli_birth: Date;

    @Column({ type: 'varchar', length: 255 })
    cli_mail: string

   
}

