import { Controller, Get, Query } from '@nestjs/common';
import { TemperatureService } from 'src/services/temperature.service';

@Controller('voltage')
export class VoltageController {
    constructor(private readonly service: TemperatureService) {}

    @Get()
    async getData(@Query('range') range: string) {
      const timeRange = range;
      return await this.service.getFieldData("voltage", timeRange);
    }
}