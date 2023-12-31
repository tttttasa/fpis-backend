import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FirmaModule } from './modules/firma/firma.module';
import { ProjektniMenadzerModule } from './modules/projektni-menadzer/projektni-menadzer.module';
import { SpisakGostijuModule } from './modules/spisak-gostiju/spisak-gostiju.module';
import { AktivnostModule } from './modules/aktivnost/aktivnost.mobule';
import { PlanDogadjajModule } from './modules/plan-dogadjaja/plan-dogadjaja.module';
import { StavkaPlanaDogadjajModule } from './modules/stavka-plana-dogadjaja/stavka-plana-dogadjaja.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB_NAME,
      autoLoadEntities: true,
    }),
    FirmaModule,
    ProjektniMenadzerModule,
    SpisakGostijuModule,
    AktivnostModule,
    PlanDogadjajModule,
    StavkaPlanaDogadjajModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
