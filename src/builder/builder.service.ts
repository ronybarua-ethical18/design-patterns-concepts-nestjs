// services/house.service.ts
import { Injectable } from '@nestjs/common';
import { House } from './models/house.model';
import { HouseBuilder } from './builder/house.builder';


@Injectable()
export class BuilderService {
  buildLuxuryHouse(): House {
    const builder = new HouseBuilder();
    return builder
      .setFoundation('Concrete')
      .setWalls('Brick Walls')
      .setRoof('Tile Roof')
      .addGarden('Beautiful Garden')
      .addPool('Large Swimming Pool')
      .addGarage('Double Garage')
      .build();
  }

  buildSimpleHouse(): House {
    const builder = new HouseBuilder();
    return builder
      .setFoundation('Wooden Foundation')
      .setWalls('Wooden Walls')
      .setRoof('Shingle Roof')
      .build();
  }
}
