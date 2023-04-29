/* eslint-disable prettier/prettier */


// books
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany, OneToMany, BaseEntity
} from "typeorm";
import { Client } from "./client.entity";

@Entity({
  name: 'client_log', schema: 'api'
})
export class ClientLog extends BaseEntity{

  @PrimaryGeneratedColumn('identity', {name: 'clg_id'})
  id: number;

  @Column({ name: 'clg_data_access', type: 'timestamp with time zone', nullable: false })
  dtAccess: Date

  @CreateDateColumn({ name: 'clg_data_valid', type: 'timestamp with time zone', nullable: false})
  dtValid: Date;

  @Column({ name: 'clg_uuid', type: 'uuid', nullable: false })
  uuid: string

  @Column({ name: 'clg_uuid_secret', type: 'uuid', nullable: false })
  uuid_secret: string

  @Column({ name: 'cli_id', type: 'integer', nullable: false })
  idClient: number

  @OneToMany(type => Client, client => client.logs)
  client: Client[]|Client
}

