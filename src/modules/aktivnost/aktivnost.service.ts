import { Injectable } from '@nestjs/common';
import { AktivnostRepository } from './aktivnost.repository';
import { AktivnostEntity } from './entity/aktivnost.entity';

@Injectable()
export class AktivnostService {
  constructor(private readonly repository: AktivnostRepository) {}

  public findAll(): Promise<AktivnostEntity[]> {
    return this.repository.findAll();
  }
}
