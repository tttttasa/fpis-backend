import { ProjektniMenadzerDto } from 'src/modules/projektni-menadzer/dto/projektni-menadzer.dto';
import { SpisakGostijuDto } from 'src/modules/spisak-gostiju/dto/spisak-gostiju.dto';

export interface PlanDogadjajaDto {
  idPlanaDogadjaja?: number;
  projektniMenadzer?: ProjektniMenadzerDto;
  spisak?: SpisakGostijuDto;
}
