import { Controller, Get, Param } from '@nestjs/common';
import { ProjektniMenadzerService } from './projektni-menadzer.service';

@Controller('projektni-menadzer')
export class ProjektniMenadzerController {
  constructor(private readonly service: ProjektniMenadzerService) {}

  @Get(':id')
  public async getProjektniMenadzer(@Param('id') id: number) {
    return await this.service.find(id);
  }
}
