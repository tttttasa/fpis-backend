import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAktivnostTable1691743367576 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS aktivnost ( \
            id_aktivnosti int NOT NULL AUTO_INCREMENT, \
            naziv varchar(50) NOT NULL, \
            termin datetime NOT NULL, \
            PRIMARY KEY (id_aktivnosti) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE aktivnost`);
  }
}
