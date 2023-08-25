import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStavkaPlanaDogadjajaTable1691751733713
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS stavka_plana_dogadjaja ( \
            id_plana_dogadjaja int NOT NULL, \
            redni_broj_stavke int NOT NULL AUTO_INCREMENT, \
            broj_sale int NOT NULL, \
            napomena varchar(500) NOT NULL, \
            id_aktivnosti int NOT NULL, \
            PRIMARY KEY (redni_broj_stavke, id_plana_dogadjaja), \
            FOREIGN KEY (id_plana_dogadjaja) REFERENCES plan_dogadjaja(id_plana_dogadjaja), \
            FOREIGN KEY (id_aktivnosti) REFERENCES aktivnost(id_aktivnosti) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE stavka_plana_dogadjaja`);
  }
}
