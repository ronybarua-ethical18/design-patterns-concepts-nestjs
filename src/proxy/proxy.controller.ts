import { Controller, Get, Param } from '@nestjs/common';
import { ProxyService } from './proxy.service';

@Controller('proxy')
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @Get('user/:id')
  getUserData(@Param('id') id: number) {
    return this.proxyService.getUserData(Number(id));
  }
}
