import { Controller, Get } from '@nestjs/common';
import { BuilderService } from './builder.service';
import { House } from './models/house.model';

@Controller('builder')
export class BuilderController {
  constructor(private readonly builderService: BuilderService) {}

  @Get('luxury')
  getLuxuriousHouse():House{
    return this.builderService.buildLuxuryHouse()
  }

  @Get('simple')
  getSimpleHouse():House{
    return this.builderService.buildSimpleHouse()
  }
}
