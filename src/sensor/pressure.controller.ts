import { Controller, Get, Query } from '@nestjs/common';
import { TemperatureService } from 'src/services/temperature.service';

@Controller('pressure')
export class PressureController {
    constructor(private readonly service: TemperatureService) {}

    @Get()
    async getData(@Query('range') range: string) {
      const timeRange = range;
      return await this.service.getFieldData("pressure", timeRange);
    }
}