import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRacunTable1691744252771 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS racun ( \
            broj_racuna int NOT NULL AUTO_INCREMENT, \
            valuta varchar(50) NOT NULL, \
            id_banke int NOT NULL, \
            PRIMARY KEY (broj_racuna), \
            FOREIGN KEY (id_banke) REFERENCES banka(id_banke) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE racun`);
  }
}
