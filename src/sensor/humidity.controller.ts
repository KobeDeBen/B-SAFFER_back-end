import { Controller, Get, Query } from '@nestjs/common';
import { HumidityService } from 'src/services/humidity.service';

@Controller('humidity')
export class HumidityController {
    constructor(private readonly humidityService: HumidityService) {}

    @Get()
    async getData(@Query('range') range: string) {
      const timeRange = range;
      return await this.humidityService.getHumidity(timeRange);
    }
}