import { Controller, Get, Query } from '@nestjs/common';
import { PressureService } from 'src/services/pressure.service';

@Controller('pressure')
export class PressureController {
    constructor(private readonly pressureService: PressureService) {}

    @Get()
    async getData(@Query('range') range: string) {
      const timeRange = range;
      return await this.pressureService.getPressure(timeRange);
    }
}