import { BaseDtoMapper } from 'src/utils/mapper/base-dto-mapper';
import { StavkaPlanaDogadjajaEntity } from '../entity/stavka-plana-dogadjaja.entity';
import { StavkaPlanaDogadjajaDto } from '../dto/stavka-plana-dogadjaja.dto';

export class StavkaPlanaDogadjajaDtoToEntityMapper extends BaseDtoMapper<
  StavkaPlanaDogadjajaEntity,
  StavkaPlanaDogadjajaDto
> {
  toDto(entity: StavkaPlanaDogadjajaEntity): StavkaPlanaDogadjajaDto {
    const {
      idAktivnosti,
      redniBrojStavke,
      brojSale,
      napomena,
      idPlanaDogadjaja,
    } = entity;

    return {
      aktivnost: { idAktivnosti: idAktivnosti },
      redniBrojStavke,
      brojSale,
      napomena,
      idPlanaDogadjaja,
    };
  }
}
