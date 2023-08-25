import { Injectable } from '@nestjs/common';
import { SpisakGostijuRepository } from './spisak-gostiju.repository';
import { SpisakGostijuEntity } from './entity/spisak-gostiju.entity';

@Injectable()
export class SpisakGostijuService {
  constructor(private readonly repository: SpisakGostijuRepository) {}

  public find(id: number): Promise<SpisakGostijuEntity> {
    return this.repository.find(id);
  }
}
