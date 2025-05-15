import { Controller, Get, Query } from '@nestjs/common';
import { VoltageService } from 'src/services/voltage.service';

@Controller('voltage')
export class VoltageController {
    constructor(private readonly voltageService: VoltageService) {}

    @Get()
    async getData(@Query('range') range: string) {
      const timeRange = range;
      return await this.voltageService.getVoltage(timeRange);
    }
}