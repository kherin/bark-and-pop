import { Controller, Post, Body, InternalServerErrorException } from '@nestjs/common';

// services
import { AppService } from '@/services/app.service';

// models
import { FormDataDto } from '@/models/form.dto';

@Controller('form')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('submit')
  async submitForm(@Body() formData: FormDataDto) {
    try {
      await this.appService.processFormData(formData);
    } catch (err) {
      console.error('Failed to submit: ', err);
      return new InternalServerErrorException(err);
    }
  }
}
