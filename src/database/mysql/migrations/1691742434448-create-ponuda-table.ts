import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePonudaTable1691742434448 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS ponuda ( \
            id_ponude int NOT NULL AUTO_INCREMENT, \
            termin datetime NOT NULL, \
            PRIMARY KEY (id_ponude) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE ponuda`);
  }
}
