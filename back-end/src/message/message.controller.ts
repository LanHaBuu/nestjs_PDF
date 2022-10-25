import {Controller, Get,Query} from '@nestjs/common'
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor(private messageService: MessageService) {}

    @Get()
    async get(@Query('msg') msg:string) {
        this.messageService.sendMessage(msg)
        return msg
    }
}