import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateGrupnaPonudaTable1691749008566
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS grupna_ponuda ( \
            id_ponude int NOT NULL, \ 
            id_plana_dogadjaja int NOT NULL, \
            id_menadzera_prodaje int NOT NULL, \
            id_zaposlenog_firme int NOT NULL, \
            broj_osoba int NOT NULL, \
            datum_zahteva datetime NOT NULL, \
            PRIMARY KEY (id_ponude), \
            FOREIGN KEY (id_ponude) REFERENCES ponuda(id_ponude), \
            FOREIGN KEY (id_plana_dogadjaja) REFERENCES plan_dogadjaja(id_plana_dogadjaja), \
            FOREIGN KEY (id_menadzera_prodaje) REFERENCES menadzer_prodaje(id_menadzera_prodaje), \
            FOREIGN KEY (id_zaposlenog_firme) REFERENCES zaposleni_firme(id_zaposlenog_firme) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE grupna_ponuda`);
  }
}
