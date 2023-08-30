import { Module } from '@nestjs/common';
import { AppController } from '@/controllers/app.controller';
import { AppService } from '@/services/app.service';
import { SheetService } from '@/services/sheet.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SheetService],
})
export class AppModule { }
