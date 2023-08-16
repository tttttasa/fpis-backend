import { BaseEntityMapper } from 'src/utils/mapper/base-entity-mapper';
import { FirmaDto } from '../dto/firma.dto';
import { FirmaEntity } from '../entity/firma.entity';

export class FirmaDtoToEntityMapper extends BaseEntityMapper<
  FirmaEntity,
  FirmaDto
> {
  toEntity(dto: FirmaDto): FirmaEntity {
    const { drzava, grad, nazivFirme, maticniBroj, datumOsnivanja } = dto;

    return {
      drzava,
      grad,
      nazivFirme,
      maticniBroj,
      datumOsnivanja,
    } as FirmaEntity;
  }
}
