import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpisakGostijuEntity } from './entity/spisak-gostiju.entity';
import { SpisakGostijuController } from './spisak-gostiju.controller';
import { SpisakGostijuService } from './spisak-gostiju.service';
import { SpisakGostijuRepository } from './spisak-gostiju.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SpisakGostijuEntity])],
  controllers: [SpisakGostijuController],
  providers: [SpisakGostijuRepository, SpisakGostijuService],
  exports: [],
})
export class SpisakGostijuModule {}
