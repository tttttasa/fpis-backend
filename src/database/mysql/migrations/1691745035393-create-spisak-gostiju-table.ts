import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSpisakGostijuTable1691745035393
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS spisak_gostiju ( \
            id_spiska int NOT NULL AUTO_INCREMENT, \
            broj_gostiju int NOT NULL, \
            imena_gostiju varchar(1000) NOT NULL, \ 
            prezimena_gostiju varchar(1000) NOT NULL, \ 
            PRIMARY KEY (id_spiska) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE spisak_gostiju`);
  }
}
