import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDrustveneMrezeTable1691748225909
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS drustvene_mreze ( \
            id_kontenta int NOT NULL, \
            rb_slike int NOT NULL AUTO_INCREMENT, \
            opis_slike varchar(500) NOT NULL, \
            PRIMARY KEY (rb_slike, id_kontenta), \
            FOREIGN KEY (id_kontenta) REFERENCES kontent(id_kontenta) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE drustvene_mreze`);
  }
}
