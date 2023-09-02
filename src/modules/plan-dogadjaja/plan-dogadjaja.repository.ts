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

  public async insert(planDogadjaja: PlanDogadjajaDto): Promise<number> {
    const formated: PlanDogadjajaBaseDto = {
      idProjektnogMenadzera:
        planDogadjaja.projektniMenadzer.idProjektnogMenadzera,
      idSpiska: planDogadjaja.spisak.idSpiska,
    };
    return (await this.repository.insert(formated)).raw.insertId;
  }

  public update(planDogadjaja: PlanDogadjajaDto) {
    const find: FindOptionsWhere<PlanDogadjajaEntity> = {
      idPlanaDogadjaja: planDogadjaja.idPlanaDogadjaja,
    };

    this.repository.update(find, {
      idPlanaDogadjaja: planDogadjaja.idPlanaDogadjaja,
      idProjektnogMenadzera:
        planDogadjaja.projektniMenadzer.idProjektnogMenadzera,
      idSpiska: planDogadjaja.spisak.idSpiska,
    });
  }
}
