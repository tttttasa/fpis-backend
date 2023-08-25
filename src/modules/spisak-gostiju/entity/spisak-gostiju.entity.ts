import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity(`spisak_gostiju`)
export class SpisakGostijuEntity {
  @PrimaryColumn({ name: 'id_spiska' })
  idSpiska: number;

  @Column({ name: 'broj_gostiju' })
  brojGostiju: number;

  @Column({ name: 'imena_gostiju' })
  imenaGostiju: string;

  @Column({ name: 'prezimena_gostiju' })
  prezimenaGostiju: string;
}
