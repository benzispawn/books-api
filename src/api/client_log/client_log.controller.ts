/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, Query, UseGuards } from "@nestjs/common";
import { Client, ClientLog, CreateClientLogDto } from "../../database/model";
import { ClientLogService } from "./client_log.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
@Controller('api/log')
export class ClientLogController {
  @Inject(ClientLogService)
  private readonly service: ClientLogService;

  @UseGuards(JwtAuthGuard)
  @Get()
  public getAll(@Query('name') query: string): Promise<ClientLog[]> {
    // if (!!query) {
    //   return this.service.getClientByName(query);
    // }
    return this.service.getAll();
  }

  // @Get(':id')
  // public getClient(@Param('id', ParseIntPipe) id: number, @Query('name') query: string): Promise<Client|Client[]> {
  //   // if (!!query) {
  //   //   return this.service.getClientByIdWithBook(id, query);
  //   // }
  //   return this.service.getClient(id);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Post()
  // public createUser(@Body() body: CreateClientLogDto): Promise<ClientLog> {
  //     return this.service.createLog(body);
  // }
}
