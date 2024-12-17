// message.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('messages')
export class DecoratorController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  sendMessage(@Body('message') message: string): void {
    return this.messageService.sendMessage(message);
  }
}
