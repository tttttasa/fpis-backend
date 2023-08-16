import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStavkaGrupnePonudeTable1691748475588
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS stavka_grupne_ponude ( \
            id_ponude int NOT NULL, \
            rb_stavke_grupne_ponude int AUTO_INCREMENT, \
            id_usluge int NOT NULL, \
            PRIMARY KEY (rb_stavke_grupne_ponude, id_ponude, id_usluge), \
            FOREIGN KEY (id_ponude) REFERENCES ponuda(id_ponude), \
            FOREIGN KEY (id_usluge) REFERENCES usluga(id_usluge) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE stavka_grupne_ponude`);
  }
}
