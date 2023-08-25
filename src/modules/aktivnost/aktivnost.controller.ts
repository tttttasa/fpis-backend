import { Controller, Get } from '@nestjs/common';
import { AktivnostService } from './aktivnost.service';

@Controller('aktivnost')
export class AktivnostController {
  constructor(private readonly service: AktivnostService) {}

  @Get()
  public async getAktivnosti() {
    return await this.service.findAll();
  }
}
