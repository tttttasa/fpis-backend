import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMenadzerProdajeTable1691743200707
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS menadzer_prodaje ( \
            id_menadzera_prodaje int NOT NULL AUTO_INCREMENT, \
            ime_men_prodaje varchar(100) NOT NULL, \
            prezime_men_prodaje varchar(100) NOT NULL, \
            PRIMARY KEY (id_menadzera_prodaje) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE menadzer_prodaje`);
  }
}
