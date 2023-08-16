import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FirmaEntity } from './entity/firma.entity';
import { FirmaController } from './firma.controller';
import { FirmaService } from './firma.service';
import { FirmaRepository } from './firma.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FirmaEntity])],
  controllers: [FirmaController],
  providers: [FirmaRepository, FirmaService],
  exports: [],
})
export class FirmaModule {}
