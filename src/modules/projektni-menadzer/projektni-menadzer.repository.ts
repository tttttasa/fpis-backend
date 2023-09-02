import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjektniMenadzerEntity } from './entity/projektni-menadzer.entity';

@Injectable()
export class ProjektniMenadzerRepository {
  constructor(
    @InjectRepository(ProjektniMenadzerEntity)
    private readonly repository: Repository<ProjektniMenadzerEntity>,
  ) {}

  public findAll(): Promise<ProjektniMenadzerEntity[]> {
    return this.repository.find();
  }

  public find(id: number): Promise<ProjektniMenadzerEntity> {
    return this.repository.findOne({ where: { idProjektnogMenadzera: id } });
  }

  public findByIme(ime: string): Promise<ProjektniMenadzerEntity[]> {
    return this.repository.find({
      where: { imeProjektnogMenadzera: Like(ime) },
    });
  }
}
