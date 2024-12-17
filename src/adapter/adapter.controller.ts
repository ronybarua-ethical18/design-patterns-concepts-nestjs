// adapter.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AdapterService } from './adapter.service';

@Controller('adapter')
export class AdapterController {
  constructor(private readonly adapterService: AdapterService) {}

  @Get()
  getUserData() {
    return this.adapterService.getFormattedData();
  }
}
