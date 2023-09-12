import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
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

  public find(naziv: string): Promise<FirmaEntity[]> {
    return this.repository.find({ where: { nazivFirme: Like(`%${naziv}%`) } });
  }

  public insert(firma: FirmaDto) {
    return this.repository.insert(firma);
  }

  public update(firma: FirmaEntity) {
    return this.repository.update({ idFirme: firma.idFirme }, firma);
  }

  public delete(firmaId: number) {
    return this.repository.delete({ idFirme: firmaId });
  }
}
