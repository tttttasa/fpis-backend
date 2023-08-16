import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBankaTable1691743794206 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS banka ( \
            id_banke int NOT NULL AUTO_INCREMENT, \
            naziv_banke varchar(250) NOT NULL, \
            PRIMARY KEY (id_banke) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE banka`);
  }
}
