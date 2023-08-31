import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from '@/controllers/app.controller';
import { AppService } from '@/services/app.service';
import { SheetService } from '@/services/sheet.service';

import * as express from 'express';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SheetService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(express.static('public'))
      .forRoutes('/');
  }
}
