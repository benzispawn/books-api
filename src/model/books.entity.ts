/* eslint-disable prettier/prettier */


// books
import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

export abstract class BaseEntity {
    
    @PrimaryGeneratedColumn('identity')
    bk_id: number;

    @Column({ type: 'varchar', length: 255 })
    bk_name: string

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    bk_reg_date: Date;

    @Column({ type: 'integer' })
    cli_id
}

