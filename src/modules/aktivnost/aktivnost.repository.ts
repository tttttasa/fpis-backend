import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AktivnostEntity } from './entity/aktivnost.entity';

@Injectable()
export class AktivnostRepository {
  constructor(
    @InjectRepository(AktivnostEntity)
    private readonly repository: Repository<AktivnostEntity>,
  ) {}

  public findAll(): Promise<AktivnostEntity[]> {
    return this.repository.find();
  }
}
