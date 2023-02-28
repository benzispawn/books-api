/* eslint-disable prettier/prettier */
import { Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../model';
// import { CreateUserDto } from 'src/model/user.dto';

@Controller('user')
export class UserController {
    @Inject(UserService)
    private readonly service: UserService;

    @Get(':id')
    public getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.service.getUser(id);
    }

    // @Post()
    // public createUser(@Body() body: CreateUserDto): Promise<User> {
    //     return this.service.createUser(body);
    // }
}
