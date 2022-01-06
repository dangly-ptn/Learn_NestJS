import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { resolve } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setViewEngine('hbs')
  app.setBaseViewsDir(resolve(__dirname, '..', 'views'))
  await app.listen(3000);
}
bootstrap();
