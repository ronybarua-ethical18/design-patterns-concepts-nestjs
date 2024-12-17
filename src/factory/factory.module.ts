import { Module } from '@nestjs/common';
import { FactoryService } from './factory/factory.service';
import { FactoryController } from './factory/factory.controller';

@Module({
  providers: [FactoryService],
  controllers: [FactoryController]
})
export class FactoryModule {}
