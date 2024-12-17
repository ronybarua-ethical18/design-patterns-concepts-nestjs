import { Controller, Get } from '@nestjs/common';
import { BridgeService } from './bridge.service';

@Controller('bridge')
export class BridgeController {
  constructor(private readonly toyService: BridgeService) {}

  @Get('plastic-car')
  getPlasticCar(): string {
    return this.toyService.getPlasticCar();
  }

  @Get('wooden-doll')
  getWoodenDoll(): string {
    return this.toyService.getWoodenDoll();
  }

  @Get('metal-ball')
  getMetalBall(): string {
    return this.toyService.getMetalBall();
  }
}
