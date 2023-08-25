import { ProjektniMenadzerEntity } from '../entity/projektni-menadzer.entity';
import { ProjektniMenadzerDto } from '../dto/projektni-menadzer.dto';
import { BaseDtoMapper } from 'src/utils/mapper/base-dto-mapper';

export class ProjektniMenadzerEntityToDtoMapper extends BaseDtoMapper<
  ProjektniMenadzerEntity,
  ProjektniMenadzerDto
> {
  toDto(entity: ProjektniMenadzerEntity): ProjektniMenadzerDto {
    const { imeProjektnogMenadzera, prezimeProjektnogMenadzera } = entity;

    return {
      imeProjektnogMenadzera,
      prezimeProjektnogMenadzera,
    } as ProjektniMenadzerDto;
  }
}
