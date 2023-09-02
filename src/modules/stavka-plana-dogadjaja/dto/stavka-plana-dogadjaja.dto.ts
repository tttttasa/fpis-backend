import { AktivnostDto } from 'src/modules/aktivnost/dto/aktivnost.dto';

export interface StavkaPlanaDogadjajaDto {
  idPlanaDogadjaja?: number;
  redniBrojStavke?: number;
  brojSale?: number;
  napomena?: string;
  aktivnost?: AktivnostDto;
}
