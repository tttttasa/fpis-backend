import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity(`stavka_plana_dogadjaja`)
export class StavkaPlanaDogadjajaEntity {
  @PrimaryColumn({ name: 'id_plana_dogadjaja' })
  idPlanaDogadjaja: number;

  @PrimaryColumn({ name: 'redni_broj_stavke' })
  redniBrojStavke: number;

  @Column({ name: 'broj_sale' })
  brojSale: number;

  @Column({ name: 'napomena' })
  napomena: string;

  @Column({ name: 'id_aktivnosti' })
  idAktivnosti: number;
}
