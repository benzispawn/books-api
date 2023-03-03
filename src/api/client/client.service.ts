/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from "typeorm";
import { Books, Client } from "../../model";

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

    /**
     * public createUser(body: CreateUserDto): Promise<User> {
    const user: User = new User();

    user.name = body.name;
    user.email = body.email;

    return this.repository.save(user);
  }
     */
}
