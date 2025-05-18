import { Controller, Get, Query } from '@nestjs/common';
import { TemperatureService } from 'src/services/temperature.service';

@Controller('humidity')
export class HumidityController {
    constructor(private readonly service: TemperatureService) {}

    @Get()
  async getData(
    @Query('start') start: string,
    @Query('stop') stop?: string
  ) {
    return await this.service.getFieldData('humidity', start, stop);
  }
}