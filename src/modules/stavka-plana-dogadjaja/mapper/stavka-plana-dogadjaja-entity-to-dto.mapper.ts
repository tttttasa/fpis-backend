import { BaseEntityMapper } from 'src/utils/mapper/base-entity-mapper';
import { StavkaPlanaDogadjajaEntity } from '../entity/stavka-plana-dogadjaja.entity';
import { StavkaPlanaDogadjajaDto } from '../dto/stavka-plana-dogadjaja.dto';

export class StavkaPlanaEntityToDataDtoMapper extends BaseEntityMapper<
  StavkaPlanaDogadjajaEntity,
  StavkaPlanaDogadjajaDto
> {
  toEntity(dto: StavkaPlanaDogadjajaDto): StavkaPlanaDogadjajaEntity {
    const { idPlanaDogadjaja, redniBrojStavke, aktivnost, brojSale, napomena } =
      dto;

    return {
      idPlanaDogadjaja,
      redniBrojStavke,
      idAktivnosti: aktivnost.idAktivnosti,
      brojSale,
      napomena,
    } as StavkaPlanaDogadjajaEntity;
  }
}
