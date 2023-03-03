/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    Inject,
    Param,
    ParseIntPipe, PipeTransform,
    Post,
    Query,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import { ClientService } from './client.service';
import { Client } from '../../model';
import { CreateUserDto } from "../../model/user.dto";
@Controller('api/client')
export class ClientController {
    @Inject(ClientService)
    private readonly service: ClientService;

    @Get()
    public getAll(@Query('name') query: string): Promise<Client[]> {
        if (!!query) {
            return this.service.getClientByName(query);
        }
        return this.service.getAll();
    }

    @Get(':id')
    public getClient(@Param('id', ParseIntPipe) id: number, @Query('name') query: string): Promise<Client|Client[]> {
        if (!!query) {
            return this.service.getClientByIdWithBook(id, query);
        }
        return this.service.getClient(id);
    }

    @Post()
    public createUser(@Body() body: CreateUserDto): Promise<Client> {
        return this.service.createUser(body);
    }
}
