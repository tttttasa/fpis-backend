import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity(`aktivnost`)
export class AktivnostEntity {
  @PrimaryColumn({ name: 'id_aktivnosti' })
  idAktivnosti: number;

  @Column({ name: 'naziv' })
  naziv: string;

  @Column(`datetime`, { name: 'termin' })
  termin: Date;
}
