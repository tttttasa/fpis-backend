import { BaseDtoMapper } from 'src/utils/mapper/base-dto-mapper';
import { FirmaEntity } from '../entity/firma.entity';
import { FirmaDto } from '../dto/firma.dto';

export class FirmaEntityToDtoMapper extends BaseDtoMapper<
  FirmaEntity,
  FirmaDto
> {
  toDto(entity: FirmaEntity): FirmaDto {
    const { drzava, grad, nazivFirme, maticniBroj, datumOsnivanja } = entity;

    return {
      drzava,
      grad,
      nazivFirme,
      maticniBroj,
      datumOsnivanja,
    };
  }
}
