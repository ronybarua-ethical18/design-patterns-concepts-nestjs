import { Injectable } from '@nestjs/common';
import { MessageService } from './message.service';

@Injectable()
export class LoggingMessageService implements MessageService {
    constructor(private readonly messageService: MessageService) {}

    sendMessage(message: string): void {
        console.log(`Logging: Sending message: ${message}`);
        this.messageService.sendMessage(message); // Call the original method
    }
}