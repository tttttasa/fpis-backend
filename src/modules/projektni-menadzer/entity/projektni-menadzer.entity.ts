import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity(`projektni_menadzer`)
export class ProjektniMenadzerEntity {
  @PrimaryColumn({ name: 'id_projektnog_menadzera' })
  idProjektnogMenadzera: number;

  @Column({ name: 'ime_projektnog_men' })
  imeProjektnogMenadzera: string;

  @Column({ name: 'prezime_projektnog_men' })
  prezimeProjektnogMenadzera: string;
}
