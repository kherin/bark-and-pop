import { Injectable } from '@nestjs/common';
import { FormDataDto } from '@/models/form.dto';
import { SheetService } from '@/services/sheet.service';

@Injectable()
export class AppService {
  constructor(private readonly sheetService: SheetService) { }

  async processFormData(formData: FormDataDto) {
    return this.sheetService.processFormData(formData);
  }
}
