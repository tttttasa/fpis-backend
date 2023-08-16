import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FirmaEntity } from './entity/firma.entity';
import { FirmaDto } from './dto/firma.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FirmaRepository {
  constructor(
    @InjectRepository(FirmaEntity)
    private readonly repository: Repository<FirmaEntity>,
  ) {}

  public findAll(): Promise<FirmaEntity[]> {
    return this.repository.find();
  }

  public insert(firma: FirmaDto) {
    return this.repository.insert(firma);
  }

  public update(firma: FirmaEntity) {
    return this.repository.update({ idFirme: firma.idFirme }, firma);
  }
}
