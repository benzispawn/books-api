/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsInt } from "class-validator";
import { Column } from "typeorm";

export class CreateClientLogDto {
  @IsInt()
  @IsNotEmpty()
  @Column({ name: 'cli_id', type: 'integer', nullable: false })
  public idClient: number
}