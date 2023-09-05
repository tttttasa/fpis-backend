import { Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StavkaPlanaDogadjajaEntity } from './entity/stavka-plana-dogadjaja.entity';
import { StavkaPlanaDogadjajaAktivnostJoinEntity } from './entity/stavka-plana-dogadjaja-aktivnost-join.interface';
import { StavkaPlanaDogadjajaDto } from './dto/stavka-plana-dogadjaja.dto';

@Injectable()
export class StavkaPlanaDogadjajRepository {
  constructor(
    @InjectRepository(StavkaPlanaDogadjajaEntity)
    private readonly repository: Repository<StavkaPlanaDogadjajaEntity>,
  ) {}

  public async find(
    plandDogadjajId: number,
  ): Promise<StavkaPlanaDogadjajaDto[]> {
    const queryResult: StavkaPlanaDogadjajaAktivnostJoinEntity[] =
      await this.repository.query(
        `SELECT * FROM stavka_plana_dogadjaja INNER JOIN aktivnost ON stavka_plana_dogadjaja.id_aktivnosti = aktivnost.id_aktivnosti WHERE stavka_plana_dogadjaja.id_plana_dogadjaja = ${plandDogadjajId}`,
      );

    return queryResult.map((stavka) => {
      return {
        idPlanaDogadjaja: stavka.id_plana_dogadjaja,
        redniBrojStavke: stavka.redni_broj_stavke,
        brojSale: stavka.broj_sale,
        napomena: stavka.napomena,
        aktivnost: {
          idAktivnosti: stavka.id_aktivnosti,
          naziv: stavka.naziv,
          termin: stavka.termin,
        },
      };
    });
  }

  public mapToEntity(planId: number, stavke: StavkaPlanaDogadjajaDto[]) {
    const stavkePlana = stavke.map((stavka) => {
      return {
        idPlanaDogadjaja: planId,
        redniBrojStavke: stavka.redniBrojStavke,
        idAktivnosti: stavka.aktivnost.idAktivnosti,
        brojSale: stavka.brojSale,
        napomena: stavka.napomena,
      } as StavkaPlanaDogadjajaEntity;
    });

    return stavkePlana;
  }
}
