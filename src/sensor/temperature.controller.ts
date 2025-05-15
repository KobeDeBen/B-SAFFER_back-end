import { Controller, Get, Query } from '@nestjs/common';
import { TemperatureService } from 'src/services/temperature.service';

@Controller('temperature')
export class TemperatureController {
    constructor(private readonly tempService: TemperatureService) {}

    @Get()
    async getData(@Query('range') range: string) {
      const timeRange = range;
      return await this.tempService.getTemperature(timeRange);
    }
}