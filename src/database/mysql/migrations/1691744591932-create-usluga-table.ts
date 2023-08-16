import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUslugaTable1691744591932 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS usluga ( \
            id_usluge int NOT NULL AUTO_INCREMENT, \
            naziv_usluge varchar(150) NOT NULL, \
            opis_usluge varchar(250) NOT NULL, \
            id_cene int NOT NULL, \
            PRIMARY KEY (id_usluge), \
            FOREIGN KEY (id_cene) REFERENCES cena(id_cene) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE usluga`);
  }
}
