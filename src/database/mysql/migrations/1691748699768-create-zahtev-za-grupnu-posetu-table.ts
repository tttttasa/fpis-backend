import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateZahtevZaGrupnuPosetuTable1691748699768
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS zahtev_za_grupnu_posetu ( \
            id_menadzera_prodaje int NOT NULL, \ 
            id_zaposlenog_firme int NOT NULL, \
            datum_zahteva datetime NOT NULL, \
            PRIMARY KEY (id_menadzera_prodaje, id_zaposlenog_firme, datum_zahteva), \
            FOREIGN KEY (id_menadzera_prodaje) REFERENCES menadzer_prodaje(id_menadzera_prodaje), \
            FOREIGN KEY (id_zaposlenog_firme) REFERENCES zaposleni_firme(id_zaposlenog_firme) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE zahtev_za_grupnu_posetu`);
  }
}
