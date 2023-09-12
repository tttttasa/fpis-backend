import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanDogadjajaEntity } from './entity/plan-dogadjaja.entity';
import { PlanDogadjajaDto } from './dto/plan-dogadjaja.dto';

@Injectable()
export class PlanDogadjajRepository {
  constructor(
    @InjectRepository(PlanDogadjajaEntity)
    private readonly repository: Repository<PlanDogadjajaEntity>,
  ) {}

  public findAll(): Promise<PlanDogadjajaEntity[]> {
    return this.repository.find();
  }

  public findByPM(idPM: number): Promise<PlanDogadjajaEntity[]> {
    return this.repository.find({ where: { idProjektnogMenadzera: idPM } });
  }

  public mapToEntity(plan: PlanDogadjajaDto): PlanDogadjajaEntity {
    return {
      idPlanaDogadjaja: plan.idPlanaDogadjaja,
      idProjektnogMenadzera: plan.projektniMenadzer.idProjektnogMenadzera,
      idSpiska: plan.spisak.idSpiska,
      datumPocetka: this.formatDateString(new Date(plan.datumPocetka)),
      datumZavrsetka: this.formatDateString(new Date(plan.datumZavrsetka)),
      stanje: plan.stanje,
    };
  }

  public formatDateString(date: Date): string {
    if (!date) {
      return;
    }

    let day: string = '';

    if (date.getDate() > 9) {
      day = date.getDate().toString();
    } else {
      day = `0${date.getDate().toString()}`;
    }

    let month: string = '';

    if ((date.getMonth() + 1) / 10 === 1) {
      month = (date.getMonth() + 1).toString();
    } else {
      month = `0${(date.getMonth() + 1).toString()}`;
    }

    return `${date.getFullYear()}-${month}-${day}`;
  }
}
