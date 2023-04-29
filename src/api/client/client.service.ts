/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository, UpdateResult } from "typeorm";
import { Books, Client } from "./../../database/model";
import { CreateClientDto } from "../../database/model/user.dto";

@Injectable()
export class ClientService {
    @InjectRepository(Client)
    private readonly repository: Repository<Client>;

    public getAll(): Promise<Client[]> {
        return this.repository.find();
    }

    public getClient(id: number): Promise<Client> {
        return this.repository.findOneBy({ id: id });
    }

    public getOneClient(username: string): Promise<Client | undefined> {
        return this.repository.findOneBy({ name: username });
    }

  public getClientByEmail(mail: string): Promise<Client> {
      console.log('passou por aqui no email')
    return this.repository.findOneBy({ mail: mail });
  }

    public getClientByName(name: string): Promise<Client[]> {
        return this.repository.findBy({
            name: ILike(`%${name}%`)
        })
    }

    public getClientByIdWithBook(id: number, name: string): Promise<Client[]|Client> {
        return this.repository.createQueryBuilder('client')
          .innerJoinAndMapMany('client.books', Books, 'bks', 'bks.cli_id = client.cli_id')
          .where("client.cli_id = :id", { id: id })
          .getMany()
    }

   public createUser(body: CreateClientDto): Promise<Client> {
    const user: Client = new Client();

    user.name = body.name;
    user.mail = body.mail;

    return this.repository.save(user);
  }

  // public updateuser(id: number, logId: number): Promise<UpdateResult> {
  //     return this.repository.update({
  //       id: id
  //     }, {
  //
  //     })
  //
  // }

}
