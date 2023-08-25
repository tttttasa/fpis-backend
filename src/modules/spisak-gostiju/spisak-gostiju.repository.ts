import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SpisakGostijuEntity } from './entity/spisak-gostiju.entity';

@Injectable()
export class SpisakGostijuRepository {
  constructor(
    @InjectRepository(SpisakGostijuEntity)
    private readonly repository: Repository<SpisakGostijuEntity>,
  ) {}

  public find(id: number): Promise<SpisakGostijuEntity> {
    return this.repository.findOne({ where: { idSpiska: id } });
  }
}
