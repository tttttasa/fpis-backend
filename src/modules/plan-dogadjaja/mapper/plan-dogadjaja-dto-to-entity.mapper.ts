import { BaseDtoMapper } from 'src/utils/mapper/base-dto-mapper';
import { PlanDogadjajaEntity } from '../entity/plan-dogadjaja.entity';
import { PlanDogadjajaDto } from '../dto/plan-dogadjaja.dto';

export class PlanDogadjajaEntityToDtoMapper extends BaseDtoMapper<
  PlanDogadjajaEntity,
  PlanDogadjajaDto
> {
  toDto(entity: PlanDogadjajaEntity): PlanDogadjajaDto {
    const {
      idPlanaDogadjaja,
      idProjektnogMenadzera,
      idSpiska,
      datumPocetka,
      datumZavrsetka,
      stanje,
    } = entity;

    return {
      idPlanaDogadjaja,
      projektniMenadzer: { idProjektnogMenadzera: idProjektnogMenadzera },
      spisak: { idSpiska: idSpiska },
      datumPocetka: new Date(datumPocetka),
      datumZavrsetka: new Date(datumZavrsetka),
      stanje: stanje,
    };
  }
}
