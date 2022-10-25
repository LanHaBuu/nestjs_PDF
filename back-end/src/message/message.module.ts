import {Module} from '@nestjs/common'
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { BullModule } from '@nestjs/bull';
import { MessageConsumer } from './message.consumer';
@Module({
    imports:[
        BullModule.registerQueue({
            name: 'testPDF',
          }),
    ],
    controllers:[MessageController],
    providers:[MessageService,MessageConsumer]
})
export class MessageModule{}