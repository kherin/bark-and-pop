import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app.module';
import * as express from 'express';
import { join } from 'path';

dotenv.config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Serve static files from the "public" directory
  app.use(express.static(join(__dirname, '..', 'public')));

  await app.listen(process.env.PORT || 4200);
}
bootstrap();
