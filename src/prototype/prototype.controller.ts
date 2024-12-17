import { Controller, Get } from '@nestjs/common';
import { PrototypeService } from './prototype.service';
import { Car } from './prototype.interface';

@Controller('prototype')
export class PrototypeController {
  constructor(private readonly prototypeService: PrototypeService) {}

  @Get()
  createCar(): Car {
    return this.prototypeService.createCar();
  }
}
