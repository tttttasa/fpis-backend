import { Injectable } from '@nestjs/common';
import { FirmaRepository } from '../firma/firma.repository';
import { FirmaEntity } from '../firma/entity/firma.entity';
import { FirmaDto } from '../firma/dto/firma.dto';

@Injectable()
export class FirmaService {
  constructor(private readonly repository: FirmaRepository) {}

  public findAll(): Promise<FirmaEntity[]> {
    return this.repository.findAll();
  }

  public find(naziv: string): Promise<FirmaEntity[]> {
    return this.repository.find(naziv);
  }

  public insert(firma: FirmaDto) {
    return this.repository.insert(firma);
  }

  public update(firma: FirmaEntity) {
    return this.repository.update(firma);
  }

  public delete(firmaId: number) {
    return this.repository.delete(firmaId);
  }
}
