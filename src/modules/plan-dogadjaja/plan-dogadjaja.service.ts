import { Injectable } from '@nestjs/common';
import { PlanDogadjajaDataDto } from './dto/plan-dogadjaja-data.dto';
import { PlanDogadjajRepository } from './plan-dogadjaja.repository';
import { StavkaPlanaDogadjajRepository } from '../stavka-plana-dogadjaja/stavka-plana-dogadjaja.repository';
import { StavkaPlanaDogadjajaEntity } from '../stavka-plana-dogadjaja/entity/stavka-plana-dogadjaja.entity';
import { ProjektniMenadzerRepository } from '../projektni-menadzer/projektni-menadzer.repository';
import { SpisakGostijuRepository } from '../spisak-gostiju/spisak-gostiju.repository';
import { PlanDogadjajaEntity } from './entity/plan-dogadjaja.entity';

@Injectable()
export class PlanDogadjajaService {
  constructor(
    private readonly repository: PlanDogadjajRepository,
    private readonly stavkeRepository: StavkaPlanaDogadjajRepository,
    private readonly pmRepository: ProjektniMenadzerRepository,
    private readonly spisakRepository: SpisakGostijuRepository,
  ) {}

  public async findAll(): Promise<PlanDogadjajaDataDto[]> {
    const planoviDogadjaja = await this.repository.findAll();

    const result: PlanDogadjajaDataDto[] = [];

    for (const plan of planoviDogadjaja) {
      const pm = await this.pmRepository.find(plan.idProjektnogMenadzera);
      const spisak = await this.spisakRepository.find(plan.idSpiska);
      const stavke = await this.stavkeRepository.find(plan.idPlanaDogadjaja);

      result.push({
        planDogadjaja: {
          idPlanaDogadjaja: plan.idPlanaDogadjaja,
          projektniMenadzer: pm,
          spisak: spisak,
        },
        stavke: stavke,
      });
    }

    return result;
  }

  public async find(imePM: string): Promise<PlanDogadjajaDataDto[]> {
    const pms = await this.pmRepository.findByIme(`%${imePM}%`);

    const planovi: PlanDogadjajaDataDto[] = [];

    for (const pm of pms) {
      const planoviByPM = await this.repository.findByPM(
        pm.idProjektnogMenadzera,
      );

      for (const plan of planoviByPM) {
        const spisak = await this.spisakRepository.find(plan.idSpiska);

        const stavkeEntities = await this.stavkeRepository.find(
          plan.idPlanaDogadjaja,
        );

        planovi.push({
          planDogadjaja: {
            idPlanaDogadjaja: plan.idPlanaDogadjaja,
            projektniMenadzer: {
              idProjektnogMenadzera: pm.idProjektnogMenadzera,
              imeProjektnogMenadzera: pm.imeProjektnogMenadzera,
              prezimeProjektnogMenadzera: pm.prezimeProjektnogMenadzera,
            },
            spisak: {
              idSpiska: spisak.idSpiska,
              brojGostiju: spisak.brojGostiju,
              imenaGostiju: spisak.imenaGostiju,
              prezimenaGostiju: spisak.prezimenaGostiju,
            },
          },
          stavke: stavkeEntities.map((entity) => {
            return {
              idPlanaDogadjaja: entity.idPlanaDogadjaja,
              redniBrojStavke: entity.redniBrojStavke,
              napomena: entity.napomena,
              brojSale: entity.brojSale,
              aktivnost: entity.aktivnost,
            };
          }),
        });
      }
    }

    return planovi;
  }

  public async insert(planDogadjaja: PlanDogadjajaDataDto) {
    const planDogadjajaId = await this.repository.insert(
      planDogadjaja.planDogadjaja,
    );

    const stavkePlana = planDogadjaja.stavke.map((stavka) => {
      return {
        idPlanaDogadjaja: planDogadjajaId,
        redniBrojStavke: stavka.redniBrojStavke,
        idAktivnosti: stavka.aktivnost.idAktivnosti,
        brojSale: stavka.brojSale,
        napomena: stavka.napomena,
      } as StavkaPlanaDogadjajaEntity;
    });

    stavkePlana.forEach((stavka) => {
      this.stavkeRepository.insert(stavka);
    });
  }

  public async update(planDogadjaja: PlanDogadjajaDataDto) {
    // Update plan dogadjaja
    await this.repository.update(planDogadjaja.planDogadjaja);

    // Update stavke
    await this.stavkeRepository.update(planDogadjaja.stavke);
  }
}
