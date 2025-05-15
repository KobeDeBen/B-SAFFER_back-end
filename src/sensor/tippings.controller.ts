import { Controller, Get, Query } from '@nestjs/common';
import { TippingsService } from 'src/services/tippings.service';

@Controller('tippings')
export class TippingsController {
    constructor(private readonly tippingsService: TippingsService) {}

    @Get()
    async getData(@Query('range') range: string) {
      const timeRange = range;
      return await this.tippingsService.getTippings(timeRange);
    }
}