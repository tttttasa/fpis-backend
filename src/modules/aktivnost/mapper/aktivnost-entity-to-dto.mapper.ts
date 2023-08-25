import { BaseDtoMapper } from 'src/utils/mapper/base-dto-mapper';
import { AktivnostEntity } from '../entity/aktivnost.entity';
import { AktivnostDto } from '../dto/aktivnost.dto';

export class AktivnostEntityToDtoMapper extends BaseDtoMapper<
  AktivnostEntity,
  AktivnostDto
> {
  toDto(entity: AktivnostEntity): AktivnostDto {
    const { naziv, termin } = entity;

    return {
      naziv,
      termin,
    };
  }
}
