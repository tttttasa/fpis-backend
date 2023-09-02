import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanDogadjajaEntity } from './entity/plan-dogadjaja.entity';
import { PlanDogadjajaController } from './plan-dogadjaja.controller';
import { PlanDogadjajRepository } from './plan-dogadjaja.repository';
import { PlanDogadjajaService } from './plan-dogadjaja.service';
import { StavkaPlanaDogadjajModule } from '../stavka-plana-dogadjaja/stavka-plana-dogadjaja.module';
import { StavkaPlanaDogadjajaEntity } from '../stavka-plana-dogadjaja/entity/stavka-plana-dogadjaja.entity';
import { ProjektniMenadzerEntity } from '../projektni-menadzer/entity/projektni-menadzer.entity';
import { ProjektniMenadzerModule } from '../projektni-menadzer/projektni-menadzer.module';
import { SpisakGostijuEntity } from '../spisak-gostiju/entity/spisak-gostiju.entity';
import { SpisakGostijuModule } from '../spisak-gostiju/spisak-gostiju.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PlanDogadjajaEntity,
      StavkaPlanaDogadjajaEntity,
      ProjektniMenadzerEntity,
      SpisakGostijuEntity,
    ]),
    ProjektniMenadzerModule,
    SpisakGostijuModule,
    StavkaPlanaDogadjajModule,
  ],
  controllers: [PlanDogadjajaController],
  providers: [PlanDogadjajRepository, PlanDogadjajaService],
  exports: [],
})
export class PlanDogadjajModule {}
