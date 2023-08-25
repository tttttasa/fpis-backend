import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedFirmaTable1692974256805 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO firma ( \
            drzava, \
            grad, \
            naziv_firme, \
            maticni_broj, \
            datum_osnivanja) \
        VALUES ( \
            'Srbija', \
            'Beograd', \
            'Trapezis Ltd', \
            '12612621267', \
            '2012-04-22 12:42:10');`,
    );
    await queryRunner.query(
      `INSERT INTO firma ( \
            drzava, \
            grad, \
            naziv_firme, \
            maticni_broj, \
            datum_osnivanja) \
        VALUES ( \
            'Srbija', \
            'Novi Sad', \
            'Index Limited', \
            '188956141677', \
            '2018-09-15 11:50:00');`,
    );
    await queryRunner.query(
      `INSERT INTO firma ( \
            drzava, \
            grad, \
            naziv_firme, \
            maticni_broj, \
            datum_osnivanja) \
        VALUES ( \
            'Bugarska', \
            'Plovdin', \
            'Blue Bulgaria', \
            '165152241457', \
            '2011-02-12 15:35:00');`,
    );
    await queryRunner.query(
      `INSERT INTO firma ( \
            drzava, \
            grad, \
            naziv_firme, \
            maticni_broj, \
            datum_osnivanja) \
        VALUES ( \
            'Srbija', \
            'Novi Sad', \
            'Duvan Grupa', \
            '185452562477', \
            '2001-04-15 12:30:00');`,
    );
    await queryRunner.query(
      `INSERT INTO firma ( \
            drzava, \
            grad, \
            naziv_firme, \
            maticni_broj, \
            datum_osnivanja) \
        VALUES ( \
            'Crna Gora', \
            'Podgorica', \
            'Black Hill Ltd', \
            '123432442231', \
            '2011-10-16 11:00:20');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM firma`);
  }
}
