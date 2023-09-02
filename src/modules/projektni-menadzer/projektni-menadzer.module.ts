import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjektniMenadzerEntity } from './entity/projektni-menadzer.entity';
import { ProjektniMenadzerController } from './projektni-menadzer.controller';
import { ProjektniMenadzerService } from './projektni-menadzer.service';
import { ProjektniMenadzerRepository } from './projektni-menadzer.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProjektniMenadzerEntity])],
  controllers: [ProjektniMenadzerController],
  providers: [ProjektniMenadzerRepository, ProjektniMenadzerService],
  exports: [ProjektniMenadzerRepository],
})
export class ProjektniMenadzerModule {}
