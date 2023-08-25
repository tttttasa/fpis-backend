import { Injectable } from '@nestjs/common';
import { ProjektniMenadzerEntity } from './entity/projektni-menadzer.entity';
import { ProjektniMenadzerRepository } from './projektni-menadzer.repository';

@Injectable()
export class ProjektniMenadzerService {
  constructor(private readonly firmaRepository: ProjektniMenadzerRepository) {}

  public find(id: number): Promise<ProjektniMenadzerEntity> {
    return this.firmaRepository.find(id);
  }
}
