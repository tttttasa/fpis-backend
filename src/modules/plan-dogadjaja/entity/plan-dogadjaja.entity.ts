import { Column, Entity, PrimaryColumn } from 'typeorm';

export enum Stanje {
  POPUNJEN = 'popunjen',
  PROVEREN = 'proveren',
  VALIDIRAN = 'validiran',
}

@Entity(`plan_dogadjaja`)
export class PlanDogadjajaEntity {
  @PrimaryColumn({ name: 'id_plana_dogadjaja' })
  idPlanaDogadjaja: number;

  @Column({ name: 'id_projektnog_menadzera' })
  idProjektnogMenadzera: number;

  @Column({ name: 'id_spiska' })
  idSpiska: number;

  @Column({ name: 'datum_pocetka', type: 'date' })
  datumPocetka: string;

  @Column({ name: 'datum_zavrsetka', type: 'date' })
  datumZavrsetka: string;

  @Column({
    name: 'stanje',
  })
  stanje: string;
}
