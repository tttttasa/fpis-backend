import { PlanDogadjajaDto } from './plan-dogadjaja.dto';
import { StavkaPlanaDogadjajaDto } from 'src/modules/stavka-plana-dogadjaja/dto/stavka-plana-dogadjaja.dto';

export interface PlanDogadjajaDataDto {
  planDogadjaja: PlanDogadjajaDto;
  stavke: StavkaPlanaDogadjajaDto[];
}
