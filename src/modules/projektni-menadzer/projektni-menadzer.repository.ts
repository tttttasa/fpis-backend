import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjektniMenadzerEntity } from './entity/projektni-menadzer.entity';

@Injectable()
export class ProjektniMenadzerRepository {
  constructor(
    @InjectRepository(ProjektniMenadzerEntity)
    private readonly repository: Repository<ProjektniMenadzerEntity>,
  ) {}

  public find(id: number): Promise<ProjektniMenadzerEntity> {
    return this.repository.findOne({ where: { idProjektnogMenadzera: id } });
  }
}
