import { BaseEntityMapper } from 'src/utils/mapper/base-entity-mapper';
import { ProjektniMenadzerEntity } from '../entity/projektni-menadzer.entity';
import { ProjektniMenadzerDto } from '../dto/projektni-menadzer.dto';

export class ProjektniMenadzerDtoToEntityMapper extends BaseEntityMapper<
  ProjektniMenadzerEntity,
  ProjektniMenadzerDto
> {
  toEntity(dto: ProjektniMenadzerDto): ProjektniMenadzerEntity {
    const { imeProjektnogMenadzera, prezimeProjektnogMenadzera } = dto;

    return {
      imeProjektnogMenadzera,
      prezimeProjektnogMenadzera,
    } as ProjektniMenadzerEntity;
  }
}
