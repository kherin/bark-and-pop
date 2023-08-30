import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from '@/services/app.service';
import { FormDataDto } from '@/models/form.dto';

@Controller('form')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('submit')
  async submitForm(@Body() formData: FormDataDto) {
    const result = await this.appService.processFormData(formData);
    return { message: 'Form submitted successfully', result };
  }
}
