import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { resolve } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const APP_DIRECTORY = resolve(__dirname, '..');

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setViewEngine('hbs');
  app.setBaseViewsDir(resolve(APP_DIRECTORY, 'views'));
  app.useStaticAssets(resolve(APP_DIRECTORY, 'public'));

  await app.listen(3000);
}
bootstrap();
