import { BaseEntityMapper } from 'src/utils/mapper/base-entity-mapper';
import { SpisakGostijuEntity } from '../entity/spisak-gostiju.entity';
import { SpisakGostijuDto } from '../dto/spisak-gostiju.dto';

export class SpisakGostijuDtoToEntityMapper extends BaseEntityMapper<
  SpisakGostijuEntity,
  SpisakGostijuDto
> {
  toEntity(dto: SpisakGostijuDto): SpisakGostijuEntity {
    const { brojGostiju, imenaGostiju, prezimenaGostiju } = dto;

    return {
      brojGostiju,
      imenaGostiju,
      prezimenaGostiju,
    } as SpisakGostijuEntity;
  }
}
