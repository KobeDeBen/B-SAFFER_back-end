import { Controller, Get } from '@nestjs/common';
import { HumidityService } from 'src/services/humidity.service';

@Controller('humidity')
export class HumidityController {
    constructor(private readonly humidityService: HumidityService) {}

    @Get()
    async getData() {
      return await this.humidityService.getHumidity();
    }
}