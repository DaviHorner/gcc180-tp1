import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import {Prisma, Tarefa } from '@prisma/client'
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService
    ) {}

  @Get()
  async getHello(): Promise<any> {
    //return this.appService.getHello();
    const tarefa = await this.prismaService.tarefa.create({
      data:{
        nome: "Meu primeiro teste nome",
        desc: "Meu Primeiro teste desc",
        prazo: "2022-01-20T12:01:30.543Z",
        concluido: false,
      }
    })
    return tarefa;
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
