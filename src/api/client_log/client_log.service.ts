/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from "typeorm";
import { Client, ClientLog } from "./../../database/model";
import { CreateClientLogDto } from "../../database/model/client_log.dto";

@Injectable()
export class ClientLogService {
  @InjectRepository(ClientLog)
  private readonly repository: Repository<ClientLog>;

  public getAll(): Promise<ClientLog[]> {
    return this.repository.find();
  }

  public getLogs(id: number): Promise<ClientLog[]|null> {
    return this.repository.findBy({ id: id });
  }

  public createLog(body: CreateClientLogDto): Promise<ClientLog> {
    const log: ClientLog = ClientLog.create();
    log.idClient = body.idClient;
    return this.repository.save(log);
  }

}
