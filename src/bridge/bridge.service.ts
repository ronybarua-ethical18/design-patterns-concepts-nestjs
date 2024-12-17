// toy.service.ts
import { Injectable } from '@nestjs/common';
import { Metal, Plastic, Wood } from './bridge.material-implementation';
import { Ball, Car, Doll } from './bridge.toy-implementation';

@Injectable()
export class BridgeService {
  getPlasticCar(): string {
    const plastic = new Plastic();
    const car = new Car(plastic);
    return car.build();
  }

  getWoodenDoll(): string {
    const wood = new Wood();
    const doll = new Doll(wood);
    return doll.build();
  }

  getMetalBall(): string {
    const metal = new Metal();
    const ball = new Ball(metal);
    return ball.build();
  }
}
