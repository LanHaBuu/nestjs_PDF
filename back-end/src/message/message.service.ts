import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class MessageService {
  constructor(@InjectQueue('testPDF') private audioQueue: Queue) {}

  async sendMessage(msg:string) {
    await this.audioQueue.add('test', {
      text: msg
    })
  }
}