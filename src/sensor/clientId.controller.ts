import { Controller, Get } from '@nestjs/common';
import { ClientIDService } from 'src/services/clientId.service';

@Controller('clientID')
export class ClientIDController {
    constructor(private readonly humidityService: ClientIDService) {}

    @Get()
    async getData() {
      return await this.humidityService.getclientID();
    }
}