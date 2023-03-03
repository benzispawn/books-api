/* eslint-disable prettier/prettier */
import { Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from '../../model';
@Controller('client')
export class ClientController {
    @Inject(ClientService)
    private readonly service: ClientService;

    @Get(':id')
    public getClient(@Param('id', ParseIntPipe) id: number): Promise<Client> {
        return this.service.getClient(id);
    }

    // @Post()
    // public createUser(@Body() body: CreateUserDto): Promise<User> {
    //     return this.service.createUser(body);
    // }
}
