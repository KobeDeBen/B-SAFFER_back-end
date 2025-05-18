import { Controller, Get, Query } from '@nestjs/common';
import { TemperatureService } from 'src/services/temperature.service';

@Controller('temperature')
export class TemperatureController {
    constructor(private readonly service: TemperatureService) {}

    @Get()
  async getData(
    @Query('start') start: string,
    @Query('stop') stop?: string
  ) {
    return await this.service.getFieldData('temperature', start, stop);
  }
}