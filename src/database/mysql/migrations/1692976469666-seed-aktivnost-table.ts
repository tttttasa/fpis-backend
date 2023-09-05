import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedAktivnostTable1692976469666 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO aktivnost ( \
            naziv, \
            termin) \
        VALUES ( \
            'Check in', \
            '2023-08-28 10:00:00');`,
    );
    await queryRunner.query(
      `INSERT INTO aktivnost ( \
            naziv, \
            termin) \
        VALUES ( \
            'Coffee break', \
            '2023-08-28 14:00:00');`,
    );
    await queryRunner.query(
      `INSERT INTO aktivnost ( \
            naziv, \
            termin) \
        VALUES ( \
            'Lecture', \
            '2023-08-28 12:00:00');`,
    );
    await queryRunner.query(
      `INSERT INTO aktivnost ( \
            naziv, \
            termin) \
        VALUES ( \
            'Workshop', \
            '2023-08-28 17:00:00');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
