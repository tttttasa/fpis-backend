import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { FirmaService } from '../firma/firma.service';
import { FirmaEntity } from './entity/firma.entity';

@Controller('firma')
export class FirmaController {
  constructor(private readonly service: FirmaService) {}

  @Get()
  public async getFirma() {
    return await this.service.findAll();
  }

  @Get(':naziv')
  public async getSpecificFirma(@Param('naziv') naziv: string) {
    return await this.service.find(naziv);
  }

  @Post()
  public async postFirma(@Body() firma: FirmaEntity) {
    await this.service.insert(firma);
  }

  @Put()
  public async putFirma(@Body() firma: FirmaEntity) {
    await this.service.update(firma);
  }
}
