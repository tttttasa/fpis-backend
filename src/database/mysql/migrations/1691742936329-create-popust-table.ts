import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePopustTable1691742936329 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS popust ( \
            id_popusta int NOT NULL AUTO_INCREMENT, \
            procenat_na_ukupnu_cenu float NOT NULL, \
            PRIMARY KEY (id_popusta) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE popust`);
  }
}
