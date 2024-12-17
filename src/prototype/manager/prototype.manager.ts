import { Injectable } from '@nestjs/common';
import { Car } from '../prototype.interface';

@Injectable()
export class PrototypeManager {
  private prototypeCar: Car;

  constructor() {
    // Initialize the prototype car
    this.prototypeCar = new Car('Toyota', 2020);
  }

  // Method to clone the prototype car
  createCar(): Car {
    return this.prototypeCar.clone()
  }
}