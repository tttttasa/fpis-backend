import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedSpisakGostijuTable1692974287866 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO spisak_gostiju ( \
            broj_gostiju, \
            imena_gostiju, \
            prezimena_gostiju) \
        VALUES ( \
            5, \
            'Milica, Nikola, Aleksa, Marko, David', \
            'Filipović, Marković, Denić, Simić, Simović');`,
    );
    await queryRunner.query(
      `INSERT INTO spisak_gostiju ( \
            broj_gostiju, \
            imena_gostiju, \
            prezimena_gostiju) \
        VALUES ( \
            2, \
            'Filip, Saša', \
            'Matić, Jocić');`,
    );
    await queryRunner.query(
      `INSERT INTO spisak_gostiju ( \
            broj_gostiju, \
            imena_gostiju, \
            prezimena_gostiju) \
        VALUES ( \
            6, \
            'Jovan, Dunja, David, Filip, Jovan, Aleksa', \
            'Filipović, Jurić, Lalošević, Davidović, Čekić, Vujičić');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE spisak_gostiju`);
  }
}
