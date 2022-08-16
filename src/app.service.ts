import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'

@Injectable()
export class AppService {
  constructor() {
    const prisma = new PrismaClient()
  }
  getHello(): string {
    return 'Hello World!';
  }

  getTarefas() {
    return this.prisma.find();
  }
}
