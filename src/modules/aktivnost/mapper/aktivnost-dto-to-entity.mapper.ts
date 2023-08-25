import { BaseEntityMapper } from 'src/utils/mapper/base-entity-mapper';
import { AktivnostEntity } from '../entity/aktivnost.entity';
import { AktivnostDto } from '../dto/aktivnost.dto';

export class AktivnostDtoToEntityMapper extends BaseEntityMapper<
  AktivnostEntity,
  AktivnostDto
> {
  toEntity(dto: AktivnostDto): AktivnostEntity {
    const { naziv, termin } = dto;

    return {
      naziv,
      termin,
    } as AktivnostEntity;
  }
}
