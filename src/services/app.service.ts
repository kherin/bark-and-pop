import { Injectable } from '@nestjs/common';
import { FormDataDto } from '@/models/form.dto';

@Injectable()
export class AppService {
  async processFormData(formData: FormDataDto): Promise<FormDataDto> {
    return formData;
  }
}
