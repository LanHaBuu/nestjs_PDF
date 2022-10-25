import { Module } from '@nestjs/common'
import { PdfController } from './pdf.controller';
import { PdfService } from './pdf.service';
import { BullModule } from '@nestjs/bull';
import { PdfConsumer } from './pdf.consumer';
@Module({
    imports: [
        BullModule.registerQueue({
            name: 'testQueue',
        }),
    ],
    controllers: [PdfController],
    providers: [PdfService, PdfConsumer]
})

export class PdfModule { }