import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStavkaGrupneFaktureTable1691752593983
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS stavka_grupne_fakture ( \
            id_ponude int NOT NULL, \
            rb_stavke_fakture int NOT NULL AUTO_INCREMENT, \
            datum_kreiranja_fakture datetime NOT NULL, \
            id_usluge int NOT NULL, \
            PRIMARY KEY (rb_stavke_fakture, id_ponude, datum_kreiranja_fakture), \
            FOREIGN KEY (id_ponude) REFERENCES grupna_ponuda(id_ponude), \
            FOREIGN KEY (id_usluge) REFERENCES usluga(id_usluge) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE stavka_grupne_fakture`);
  }
}
