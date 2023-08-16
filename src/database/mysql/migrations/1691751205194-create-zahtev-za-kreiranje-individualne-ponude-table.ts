import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateZahtevZaKreiranjeIndividualnePonudeTable1691751205194
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS zahtev_za_kreiranje_individualne_ponude ( \
            id_zahteva int NOT NULL AUTO_INCREMENT, \ 
            id_menadzera_prodaje int NOT NULL, \
            id_plana int NOT NULL, \
            PRIMARY KEY (id_zahteva), \
            FOREIGN KEY (id_menadzera_prodaje) REFERENCES grupna_ponuda(id_menadzera_prodaje), \
            FOREIGN KEY (id_plana) REFERENCES plan_promena(id_plana) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP TABLE zahtev_za_kreiranje_individualne_ponude`,
    );
  }
}
