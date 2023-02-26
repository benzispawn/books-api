import { Controller, Get } from "@nestjs/common";
import { User } from "src/model/user.entity";
import { UsersService } from "./user.service";


@Controller('user')
export class UserController {

    constructor(
        private userService: UsersService
    ) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
}