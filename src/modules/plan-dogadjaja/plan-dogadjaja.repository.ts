import { Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanDogadjajaEntity } from './entity/plan-dogadjaja.entity';
import { PlanDogadjajaDto } from './dto/plan-dogadjaja.dto';
import { PlanDogadjajaBaseDto } from './dto/plan-dogadjaja-base.dto';

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
    };
  }
}
