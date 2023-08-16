import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCenaTable1691744414840 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS cena ( \
            id_cene int NOT NULL AUTO_INCREMENT, \
            valuta varchar(50) NOT NULL, \
            id_popusta int NOT NULL, \
            PRIMARY KEY (id_cene), \
            FOREIGN KEY (id_popusta) REFERENCES popust(id_popusta) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE cena`);
  }
}
