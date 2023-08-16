import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFirmaTable1691743060109 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS firma ( \
            id_firme int NOT NULL AUTO_INCREMENT, \
            drzava varchar(200) NOT NULL, \
            grad varchar(200) NOT NULL, \
            naziv_firme varchar(200) NOT NULL, \
            maticni_broj varchar(100) NOT NULL, \
            datum_osnivanja datetime NOT NULL, \
            PRIMARY KEY (id_firme) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE firma`);
  }
}
