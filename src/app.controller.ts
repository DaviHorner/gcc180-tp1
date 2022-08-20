import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import {Prisma, Tarefa } from '@prisma/client'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/tarefas')
  async getTarefas():Promise<Tarefa[]>{
    return await this.appService.getTarefas({});
  }

  @Get('/tarefas/:id')
  async getTarefa(@Param('id') id: string):Promise<Tarefa>{
    return await this.appService.getTarefa({ id: String(id) });
  }
 
  @Post('/tarefas')
  async postTarefas(@Body() dados: Tarefa){
    await this.appService.postTarefa(dados);
  }

  @Put('/tarefas/:id')
  async putTarefas(@Param('id') id: string): Promise<Tarefa> {
    return this.appService.updateTarefa({
      where: { id: String(id) },
      data: { concluido: true },
    });
  }

  @Delete(`/tarefas/:id`)
  async deleteTarefa(@Param('id') id: string):Promise<Tarefa>{
    return await this.appService.deleteTarefa({ id: String(id) });
}
}
