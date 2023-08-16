import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateKontentTable1691745593203 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS kontent ( \
            id_kontenta int NOT NULL AUTO_INCREMENT, \
            datum_obrazovanja datetime NOT NULL, \
            upustvo varchar(500) NOT NULL, \
            id_ponude int NOT NULL, \
            id_marketing_men int NOT NULL, \
            PRIMARY KEY (id_kontenta), \
            FOREIGN KEY (id_ponude) REFERENCES ponuda(id_ponude), \
            FOREIGN KEY (id_marketing_men) REFERENCES marketing_menadzer(id_marketing_men) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE kontent`);
  }
}
