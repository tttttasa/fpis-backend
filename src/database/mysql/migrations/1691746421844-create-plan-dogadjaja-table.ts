import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePlanDogadjajaTable1691746421844
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS plan_dogadjaja ( \
            id_plana_dogadjaja int NOT NULL AUTO_INCREMENT, \
            id_projektnog_menadzera int NOT NULL, \
            id_spiska int NOT NULL, \
            PRIMARY KEY (id_plana_dogadjaja), \
            FOREIGN KEY (id_projektnog_menadzera) REFERENCES projektni_menadzer(id_projektnog_menadzera), \
            FOREIGN KEY (id_spiska) REFERENCES spisak_gostiju(id_spiska) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE plan_dogadjaja`);
  }
}
