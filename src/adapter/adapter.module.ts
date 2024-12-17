import { Module } from '@nestjs/common';
import { AdapterService } from './adapter.service';
import { AdapterController } from './adapter.controller';

@Module({
  controllers: [AdapterController],
  providers: [AdapterService],
})
export class AdapterModule {}
