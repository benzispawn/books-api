/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../../model';

@Injectable()
export class ClientService {
    @InjectRepository(Client)
    private readonly repository: Repository<Client>;

    public getClient(id: number): Promise<Client> {
        return this.repository.findOneBy({ id: id });
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
