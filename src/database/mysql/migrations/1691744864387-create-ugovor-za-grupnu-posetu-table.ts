import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUgovorZaGrupnuPosetuTable1691744864387
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS ugovor_za_grupnu_posetu ( \
            id_ugovora int NOT NULL AUTO_INCREMENT, \
            id_direktora int NOT NULL, \
            id_ponude int NOT NULL, \
            PRIMARY KEY (id_ugovora), \
            FOREIGN KEY (id_direktora) REFERENCES direktor(id_direktora), \
            FOREIGN KEY (id_ponude) REFERENCES ponuda(id_ponude) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE ugovor_za_grupnu_posetu`);
  }
}
