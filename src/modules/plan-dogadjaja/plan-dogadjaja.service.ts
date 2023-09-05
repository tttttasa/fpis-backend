import { Injectable } from '@nestjs/common';
import { PlanDogadjajaDataDto } from './dto/plan-dogadjaja-data.dto';
import { PlanDogadjajRepository } from './plan-dogadjaja.repository';
import { StavkaPlanaDogadjajRepository } from '../stavka-plana-dogadjaja/stavka-plana-dogadjaja.repository';
import { StavkaPlanaDogadjajaEntity } from '../stavka-plana-dogadjaja/entity/stavka-plana-dogadjaja.entity';
import { ProjektniMenadzerRepository } from '../projektni-menadzer/projektni-menadzer.repository';
import { SpisakGostijuRepository } from '../spisak-gostiju/spisak-gostiju.repository';
import { PlanDogadjajaEntity } from './entity/plan-dogadjaja.entity';
import { DataSource, getManager } from 'typeorm';
import { PlanDogadjajaDto } from './dto/plan-dogadjaja.dto';

@Injectable()
export class PlanDogadjajaService {
  constructor(
    private readonly repository: PlanDogadjajRepository,
    private readonly stavkeRepository: StavkaPlanaDogadjajRepository,
    private readonly pmRepository: ProjektniMenadzerRepository,
    private readonly spisakRepository: SpisakGostijuRepository,

    private readonly dataSource: DataSource,
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
    this.dataSource.manager.transaction(async (manager) => {
      const planEntity = this.repository.mapToEntity(
        planDogadjaja.planDogadjaja,
      );

      const planDogadjajaId = await manager.insert(
        PlanDogadjajaEntity,
        planEntity,
      );

      const stavkeEntities = this.stavkeRepository.mapToEntity(
        planDogadjajaId.raw.insertId,
        planDogadjaja.stavke,
      );

      await manager.save(StavkaPlanaDogadjajaEntity, stavkeEntities);
    });
  }

  public async update(planDogadjaja: PlanDogadjajaDataDto) {
    this.dataSource.transaction(async (manager) => {
      const planDogadjajaEntity = this.repository.mapToEntity(
        planDogadjaja.planDogadjaja,
      );

      // Update plan dogadjaja
      await manager.update(PlanDogadjajaEntity, planDogadjajaEntity, {
        idPlanaDogadjaja: planDogadjajaEntity.idPlanaDogadjaja,
      });

      // Delete previous stavke
      await manager.delete(StavkaPlanaDogadjajaEntity, {
        idPlanaDogadjaja: planDogadjajaEntity.idPlanaDogadjaja,
      });

      const stavkeEntities = this.stavkeRepository.mapToEntity(
        planDogadjajaEntity.idPlanaDogadjaja,
        planDogadjaja.stavke,
      );

      // Save new stavke
      await manager.save(StavkaPlanaDogadjajaEntity, stavkeEntities);
    });
  }
}
