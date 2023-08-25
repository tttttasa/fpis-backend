import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedAktivnostTable1692976469666 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO aktivnost ( \
            naziv, \
            termin) \
        VALUES ( \
            'Kuglanje', \
            '2023-08-28 14:00:00');`,
    );
    await queryRunner.query(
      `INSERT INTO aktivnost ( \
            naziv, \
            termin) \
        VALUES ( \
            'Pikado', \
            '2023-08-29 14:00:00');`,
    );
    await queryRunner.query(
      `INSERT INTO aktivnost ( \
            naziv, \
            termin) \
        VALUES ( \
            'Tenis', \
            '2023-08-30 14:00:00');`,
    );
    await queryRunner.query(
      `INSERT INTO aktivnost ( \
            naziv, \
            termin) \
        VALUES ( \
            'Ronjenje', \
            '2023-08-31 14:00:00');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
