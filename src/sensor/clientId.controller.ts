import { Controller, Get, Query } from '@nestjs/common';
import { ClientIDService } from 'src/services/clientId.service';

@Controller('clientID')
export class ClientIDController {
    constructor(private readonly clientIDservice: ClientIDService) {}

    @Get()
    async getData(@Query('range') range: string) {
      const timeRange = range;
      return await this.clientIDservice.getclientID(timeRange);
    }
}