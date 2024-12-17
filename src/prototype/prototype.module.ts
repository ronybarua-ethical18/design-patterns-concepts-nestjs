import { Module } from '@nestjs/common';
import { PrototypeService } from './prototype.service';
import { PrototypeController } from './prototype.controller';
import { PrototypeManager } from './manager/prototype.manager';

@Module({
  controllers: [PrototypeController],
  providers: [PrototypeService, PrototypeManager],
})
export class PrototypeModule {}
