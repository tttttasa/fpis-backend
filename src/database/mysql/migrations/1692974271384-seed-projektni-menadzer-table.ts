import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedProjektniMenadzerTable1692974271384
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO projektni_menadzer ( \
            ime_projektnog_men, \
            prezime_projektnog_men) \
        VALUES ( \
            'Marko', \
            'Marković'); `,
    );
    await queryRunner.query(
      `INSERT INTO projektni_menadzer ( \
            ime_projektnog_men, \
            prezime_projektnog_men) \
        VALUES ( \
            'Petar', \
            'Todorović'); `,
    );
    await queryRunner.query(
      `INSERT INTO projektni_menadzer ( \
            ime_projektnog_men, \
            prezime_projektnog_men) \
        VALUES ( \
            'Mina', \
            'Perić'); `,
    );
    await queryRunner.query(
      `INSERT INTO projektni_menadzer ( \
            ime_projektnog_men, \
            prezime_projektnog_men) \
        VALUES ( \
            'Sofija', \
            'Denić'); `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE projektni_menadzer`);
  }
}
