import { Controller, Get, Query } from '@nestjs/common';
import { FactoryService } from './factory.service';

@Controller('factory')
export class FactoryController {
  constructor(private readonly factoryService: FactoryService) {}

  @Get()
  getShape(@Query('type') type: string) {
    const shape = this.factoryService.createShape(type);
    return shape.draw();
  }
}
