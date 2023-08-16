import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAzuriraTable1691752854581 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS azurira ( \
            id_plana int NOT NULL, \
            id_kontenta int NOT NULL, \
            datum_azuriranja datetime NOT NULL, \
            PRIMARY KEY (id_plana, id_kontenta, datum_azuriranja), \
            FOREIGN KEY (id_plana) REFERENCES plan_promena(id_plana), \
            FOREIGN KEY (id_kontenta) REFERENCES kontent(id_kontenta) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE azurira`);
  }
}
