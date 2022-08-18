import { NestFactory } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';
import { AppModule } from './app.module';

const prisma = new PrismaClient();

async function bootstrap() {
  const tarefa = await prisma.tarefa.create({
    data:{
      nome: "Meu primeiro teste nome",
      desc: "Meu Primeiro teste desc",
      prazo: "2022-01-20T12:01:30.543Z",
      concluido: false,
    }
  })
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
