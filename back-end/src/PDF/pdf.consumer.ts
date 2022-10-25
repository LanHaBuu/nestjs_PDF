import {Process, Processor} from '@nestjs/bull'
import {Job} from 'bull'

@Processor('testQueue')
export class PdfConsumer {
    @Process('test1')
    message(job:Job<any>) {
        console.log(job);
    }
}