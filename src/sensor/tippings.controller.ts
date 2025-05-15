import { Controller, Get } from '@nestjs/common';
import { TippingsService } from 'src/services/tippings.service';

@Controller('tippings')
export class TippingsController {
    constructor(private readonly tippingsService: TippingsService) {}

    @Get()
    async getData() {
      return await this.tippingsService.getTippings();
    }
}