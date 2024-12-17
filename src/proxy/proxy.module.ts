import { Module } from '@nestjs/common';
import { ProxyService } from './proxy.service';
import { ProxyController } from './proxy.controller';

@Module({
  controllers: [ProxyController],
  providers: [ProxyService],
})
export class ProxyModule {}

/*
What we can achieve using the pattern

Access Control
Lazy Initialization
Logging and Monitoring
Caching
Validation
Network Communication
Security
Monitoring Performance
Simplified Interface
Batch Operations 

*/
