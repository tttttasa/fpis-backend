import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDirektorTable1691742680820 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS direktor ( \
            id_direktora int NOT NULL AUTO_INCREMENT, \
            ime_direktora varchar(100) NOT NULL, \
            prezime_direktora varchar(100) NOT NULL, \
            PRIMARY KEY (id_direktora) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE direktor`);
  }
}
