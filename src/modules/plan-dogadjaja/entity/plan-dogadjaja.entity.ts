import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity(`plan_dogadjaja`)
export class PlanDogadjajaEntity {
  @PrimaryColumn({ name: 'id_plana_dogadjaja' })
  idPlanaDogadjaja: number;

  @Column({ name: 'id_projektnog_menadzera' })
  idProjektnogMenadzera: number;

  @Column({ name: 'id_spiska' })
  idSpiska: number;
}
