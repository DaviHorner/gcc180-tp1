import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(`/tarefas`)
  async get() {}

  @Post(`/tarefas`)
  async post() {}

  @Put(`/tarefas`)
  async put() {}

  @Delete(`/tarefas`)
  async delete() {}
}
