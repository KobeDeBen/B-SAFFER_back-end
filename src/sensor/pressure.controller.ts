import { Controller, Get } from '@nestjs/common';
import { PressureService } from 'src/services/pressure.service';

@Controller('pressure')
export class PressureController {
    constructor(private readonly pressureService: PressureService) {}

    @Get()
    async getData() {
      return await this.pressureService.getPressure();
    }
}