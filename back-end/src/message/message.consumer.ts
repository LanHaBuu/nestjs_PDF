import {Process, Processor} from '@nestjs/bull'
import {Job} from 'bull'

@Processor('testPDF')
export class MessageConsumer {
    @Process('test')
    message(job:Job<any>) {
        console.log(job);
    }
}