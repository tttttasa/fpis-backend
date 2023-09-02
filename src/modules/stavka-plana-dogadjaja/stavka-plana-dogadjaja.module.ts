import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StavkaPlanaDogadjajaEntity } from './entity/stavka-plana-dogadjaja.entity';
import { StavkaPlanaDogadjajRepository } from './stavka-plana-dogadjaja.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StavkaPlanaDogadjajaEntity])],
  controllers: [],
  providers: [StavkaPlanaDogadjajRepository],
  exports: [StavkaPlanaDogadjajRepository],
})
export class StavkaPlanaDogadjajModule {}
