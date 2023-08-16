import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePlanPromenaTable1691750920183 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS plan_promena ( \
            id_plana int NOT NULL, \ 
            id_direktora int NOT NULL, \
            utisak varchar(500) NOT NULL, \
            datum_promene datetime NOT NULL, \
            PRIMARY KEY (id_plana), \
            FOREIGN KEY (id_direktora) REFERENCES direktor(id_direktora) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE plan_promena`);
  }
}
