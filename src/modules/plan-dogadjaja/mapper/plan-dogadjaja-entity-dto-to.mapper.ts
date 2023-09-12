import { BaseEntityMapper } from 'src/utils/mapper/base-entity-mapper';
import { PlanDogadjajaEntity } from '../entity/plan-dogadjaja.entity';
import { PlanDogadjajaDto } from '../dto/plan-dogadjaja.dto';

export class PlanDogadjajaDtoToEntityMapper extends BaseEntityMapper<
  PlanDogadjajaEntity,
  PlanDogadjajaDto
> {
  toEntity(dto: PlanDogadjajaDto): PlanDogadjajaEntity {
    const { projektniMenadzer, spisak, datumPocetka, datumZavrsetka, stanje } =
      dto;

    return {
      idProjektnogMenadzera: projektniMenadzer.idProjektnogMenadzera,
      idSpiska: spisak.idSpiska,
      datumPocetka: datumPocetka.toString(),
      datumZavrsetka: datumZavrsetka.toString(),
      stanje: stanje,
    } as PlanDogadjajaEntity;
  }
}
