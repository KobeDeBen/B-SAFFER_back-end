import { Controller, Get } from '@nestjs/common';
import { TemperatureService } from 'src/services/temperature.service';

@Controller('temperature')
export class TemperatureController {
    constructor(private readonly tempService: TemperatureService) {}

    @Get()
    async getData() {
      return await this.tempService.getTemperature();
    }
}

