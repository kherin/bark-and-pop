import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app.module';

dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 4200);
}
bootstrap();
