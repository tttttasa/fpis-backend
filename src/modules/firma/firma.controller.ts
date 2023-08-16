import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { FirmaService } from '../firma/firma.service';
import { FirmaEntity } from './entity/firma.entity';

@Controller('firma')
export class FirmaController {
  constructor(private readonly service: FirmaService) {}

  @Get()
  public async getFirma() {
    return await this.service.findAll();
  }

  @Post()
  public async postFirma(@Body() firma: FirmaEntity) {
    await this.service.insert(firma);
  }

  @Delete()
  public async deleteFirma(@Body() firma: FirmaEntity) {
    await this.service.delete(firma);
  }

  @Put()
  public async putFirma(@Body() firma: FirmaEntity) {
    await this.service.update(firma);
  }
}
