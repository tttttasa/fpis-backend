import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProjektniMenadzerTable1691746287733
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS projektni_menadzer ( \
            id_projektnog_menadzera int NOT NULL AUTO_INCREMENT, \
            ime_projektnog_men varchar(100) NOT NULL, \
            prezime_projektnog_men varchar(100) NOT NULL, \
            PRIMARY KEY (id_projektnog_menadzera) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE projektni_menadzer`);
  }
}
