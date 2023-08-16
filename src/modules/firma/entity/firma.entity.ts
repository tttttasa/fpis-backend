import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity(`firma`)
export class FirmaEntity {
  @PrimaryColumn({ name: 'id_firme' })
  idFirme: number;

  @Column({ name: 'drzava' })
  drzava: string;

  @Column({ name: 'grad' })
  grad: string;

  @Column({ name: 'naziv_firme' })
  nazivFirme: string;

  @Column({ name: 'maticni_broj' })
  maticniBroj: string;

  @Column(`datetime`, { name: `datum_osnivanja` })
  datumOsnivanja: Date;
}
