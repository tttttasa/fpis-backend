import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AktivnostEntity } from './entity/aktivnost.entity';
import { AktivnostController } from './aktivnost.controller';
import { AktivnostRepository } from './aktivnost.repository';
import { AktivnostService } from './aktivnost.service';

@Module({
  imports: [TypeOrmModule.forFeature([AktivnostEntity])],
  controllers: [AktivnostController],
  providers: [AktivnostRepository, AktivnostService],
  exports: [],
})
export class AktivnostModule {}
