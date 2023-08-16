import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateReklamacioniMaterijalTable1691746728740
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS reklamacioni_materijal ( \
            id_kontenta int NOT NULL, \
            rd_materijala int NOT NULL AUTO_INCREMENT, \
            sadrzaj_materijala varchar(500) NOT NULL, \
            PRIMARY KEY (rd_materijala, id_kontenta), \
            FOREIGN KEY (id_kontenta) REFERENCES kontent(id_kontenta) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE reklamacioni_materijal`);
  }
}
