import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateGrupnaFakturaTable1691749289480
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS grupna_faktura ( \
            id_ponude int NOT NULL, \ 
            broj_racuna int NOT NULL, \
            datum_kreiranja_fakture datetime NOT NULL, \
            mesto varchar(150) NOT NULL, \
            id_firme int NOT NULL, \
            PRIMARY KEY (id_ponude, broj_racuna, datum_kreiranja_fakture), \
            FOREIGN KEY (id_ponude) REFERENCES grupna_ponuda(id_ponude), \
            FOREIGN KEY (broj_racuna) REFERENCES racun(broj_racuna), \
            FOREIGN KEY (id_firme) REFERENCES firma(id_firme) \
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE grupna_faktura`);
  }
}
