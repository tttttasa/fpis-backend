import { Controller, Get, Param } from '@nestjs/common';
import { SpisakGostijuService } from './spisak-gostiju.service';

@Controller('spisak-gostiju')
export class SpisakGostijuController {
  constructor(private readonly service: SpisakGostijuService) {}

  @Get(':id')
  public async getSpisakGostiju(@Param('id') id: number) {
    return await this.service.find(id);
  }
}
