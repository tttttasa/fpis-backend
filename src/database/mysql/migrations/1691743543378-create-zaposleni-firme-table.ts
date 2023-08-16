import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateZaposleniFirmeTable1691743543378
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS zaposleni_firme ( \
            id_zaposlenog_firme int NOT NULL AUTO_INCREMENT, \
            id_firme int NOT NULL, \
            PRIMARY KEY (id_zaposlenog_firme), \
            FOREIGN KEY (id_firme) REFERENCES firma(id_firme) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE zaposleni_firme`);
  }
}
