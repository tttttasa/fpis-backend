import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
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

  public async insert(stavkaPlanaDogadjaja: StavkaPlanaDogadjajaEntity) {
    this.repository.insert(stavkaPlanaDogadjaja);
  }

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

  public async contains(idPlanaDogadjaja: number, redniBroj: number) {
    const result = await this.repository.findOne({
      where: { idPlanaDogadjaja: idPlanaDogadjaja, redniBrojStavke: redniBroj },
    });

    return result ? true : false;
  }

  public async update(stavkePlanaDogadjaja: StavkaPlanaDogadjajaDto[]) {
    const idPlana = stavkePlanaDogadjaja[0].idPlanaDogadjaja;

    for (const stavka of stavkePlanaDogadjaja) {
      if (
        !(await this.contains(stavka.idPlanaDogadjaja, stavka.redniBrojStavke))
      ) {
        this.insert({
          idPlanaDogadjaja: idPlana,
          redniBrojStavke: stavka.redniBrojStavke,
          brojSale: stavka.brojSale,
          napomena: stavka.napomena,
          idAktivnosti: stavka.aktivnost.idAktivnosti,
        });
      }
    }
  }
}
