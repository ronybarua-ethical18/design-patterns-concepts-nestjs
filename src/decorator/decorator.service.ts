import { MessageService } from './message.service';

export class LoggingMessageService extends MessageService {
  constructor(private readonly messageService: MessageService) {
    super()
  }

  sendMessage(message: string): void {
      return this.messageService.sendMessage(message)
  }
}
