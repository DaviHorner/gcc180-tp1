import { Injectable } from '@nestjs/common';
import { Tarefa, Prisma, PrismaClient } from '.prisma/client'
import { PrismaService } from '../prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma = new PrismaClient()) {

  }
  getHello(): string {
    return 'Hello World!';
  }

  async getTarefa(tarefaWhereUniqueInput: Prisma.TarefaWhereUniqueInput): Promise<Tarefa | null> {
    return this.prisma.tarefa.findUnique({
      where: tarefaWhereUniqueInput,
    });
  }

  async getTarefas(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TarefaWhereUniqueInput;
    where?: Prisma.TarefaWhereInput;
    orderBy?: Prisma.TarefaOrderByWithRelationInput;
  }): Promise<Tarefa[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.tarefa.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createTarefa(data: Prisma.TarefaCreateInput): Promise<Tarefa> {
    return this.prisma.tarefa.create({
      data,
    });
  }

  async postTarefa(data: Prisma.TarefaCreateInput): Promise<Tarefa> {
      return this.prisma.tarefa.create({ data, });
  }

  async updateTarefa(params: { where: Prisma.TarefaWhereUniqueInput; data: Prisma.TarefaUpdateInput; }): Promise<Tarefa>{
    const {where, data} = params;
    return this.prisma.tarefa.update({
      data,
      where,
    });
  }

  async deleteTarefa(where: Prisma.TarefaWhereUniqueInput): Promise<Tarefa> {
    return this.prisma.tarefa.delete({
      where,
    });
  }
}
