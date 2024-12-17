import { Module } from '@nestjs/common';
import { BridgeService } from './bridge.service';
import { BridgeController } from './bridge.controller';

@Module({
  controllers: [BridgeController],
  providers: [BridgeService],
})
export class BridgeModule {}

/* The Bridge Pattern prevents you from creating too many specific classes by separating what you want to do (abstraction) from how you do it (implementation). 
This makes your code flexible and reduces duplication.

The Bridge Pattern is called so because it acts as a "bridge" to connect two independent hierarchies:

Abstraction hierarchy (what the system does, i.e., its interface and behavior).
Implementation hierarchy (how the system works, i.e., the concrete details of its functionality).

key points
1. Seperation of abstraction - toy
2. Seperation of implementation - material

*/
