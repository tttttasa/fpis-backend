import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStavkaIndividualnePonudeTable1691752464674
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS stavka_individualne_ponude ( \
            id_ponude int NOT NULL, \
            rb_stavke_ind_ponude int NOT NULL AUTO_INCREMENT, \
            id_usluge int NOT NULL, \
            PRIMARY KEY (rb_stavke_ind_ponude, id_ponude), \
            FOREIGN KEY (id_ponude) REFERENCES individualna_ponuda(id_ponude), \
            FOREIGN KEY (id_usluge) REFERENCES usluga(id_usluge) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE stavka_individualne_ponude`);
  }
}
