import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateIndividualnaPonudaTable1691752232549
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS individualna_ponuda ( \
            id_ponude int NOT NULL, \
            broj_odraslih int NOT NULL, \
            broj_dece int NOT NULL, \
            id_zahteva int NOT NULL, \
            PRIMARY KEY (id_ponude), \
            FOREIGN KEY (id_ponude) REFERENCES ponuda(id_ponude), \
            FOREIGN KEY (id_zahteva) REFERENCES zahtev_za_kreiranje_individualne_ponude(id_zahteva) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE individualna_ponuda`);
  }
}
