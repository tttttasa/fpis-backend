import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMarketingMenadzerTable1691745416007
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS marketing_menadzer ( \
            id_marketing_men int NOT NULL AUTO_INCREMENT, \
            ime_marketing_men varchar(100) NOT NULL, \
            prezime_marketing_men varchar(100) NOT NULL, \
            PRIMARY KEY (id_marketing_men) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE marketing_menadzer`);
  }
}
