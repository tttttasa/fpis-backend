import { Injectable } from '@nestjs/common';
import { FirmaRepository } from '../firma/firma.repository';
import { FirmaEntity } from '../firma/entity/firma.entity';
import { FirmaDto } from '../firma/dto/firma.dto';

@Injectable()
export class FirmaService {
  constructor(private readonly firmaRepository: FirmaRepository) {}

  public findAll(): Promise<FirmaEntity[]> {
    return this.firmaRepository.findAll();
  }

  public find(naziv: string): Promise<FirmaEntity[]> {
    return this.firmaRepository.find(naziv);
  }

  public insert(firma: FirmaDto) {
    return this.firmaRepository.insert(firma);
  }

  public update(firma: FirmaEntity) {
    return this.firmaRepository.update(firma);
  }
}
