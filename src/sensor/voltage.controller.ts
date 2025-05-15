import { Controller, Get } from '@nestjs/common';
import { VoltageService } from 'src/services/voltage.service';

@Controller('voltage')
export class VoltageController {
    constructor(private readonly voltageService: VoltageService) {}

    @Get()
    async getData() {
      return await this.voltageService.getVoltage();
    }
}