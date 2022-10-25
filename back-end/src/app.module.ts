import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MessageModule } from './message/message.module';
import { PdfModule } from './PDF/pdf.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host:'localhost',
        port: 6379
      }
    }),
    PdfModule,
    MessageModule
  ],

})
export class AppModule {}
