import { FormDataDto } from '@/models/form.dto';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
];


@Injectable()
export class SheetService {
    async processFormData(formData: FormDataDto) {
        try {
            const jwt = new JWT({
                email: process.env.CLIENT_EMAIL,
                key: process.env.PRIVATE_KEY,
                scopes: SCOPES,
            });

            const doc = new GoogleSpreadsheet(process.env.SHEET_ID, jwt);
            await doc.loadInfo();

            const sheet = doc.sheetsByIndex[0];
            await sheet.addRow({ name: formData.name, email: formData.email, address: formData.address });
        } catch (err) {
            console.error('Failed: ', err);
            throw new InternalServerErrorException(err)
        }

    }
}
