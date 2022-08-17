import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('tarefas')
  async getTarefas():Promise<Tarefa[]>{
    return await this.appService.getTarefas({});
  }

  @Get('tarefas/:id')
  async getTarefa(@Param('id') id: string):Promise<Tarefa>{
    return await this.appService.getTarefa({ id: Number(id) });
  }
 
  @Post('tarefas')
  async postTarefas(@Body() dados: Tarefa){
    await this.appService.postTarefa(dados);
  }

  @Put('tarefas/:id')
  async putTarefas(@Param('id') id: string): Promise<Tarefa> {
    return this.appService.updateTarefa({
      where: { id: Number(id) },
      data: { completa: true },
    });
  }

  @Delete(`/tarefas/:id`)
  async deleteTarefa(@Param(:id) id: string):Promise<Tarefa> {
    const params: Prisma.EventWhereUniqueInput = {
      id: id,
    };
    return this.appService.deleteTarefa(params);
  }
}
