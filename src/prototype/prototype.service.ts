import { Injectable } from '@nestjs/common';
import { PrototypeManager } from './manager/prototype.manager';
import { Car } from './prototype.interface';

@Injectable()
export class PrototypeService {
  constructor(private readonly prototypeManger: PrototypeManager) {}
  createCar(): Car {
    return this.prototypeManger.createCar();
  }
}
