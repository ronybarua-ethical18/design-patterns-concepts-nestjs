import { Controller, Get, Query } from '@nestjs/common';
import { AbstractFactoryService } from './abstract-factory.service';

@Controller('abstract-factory')
export class AbstractFactoryController {
  constructor(
    private readonly abstractFactoryService: AbstractFactoryService,
  ) {}

  @Get()
  processPayment(@Query('amount') amount: number): string {
    return this.abstractFactoryService.process(amount);
  }
}
