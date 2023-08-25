import { BaseDtoMapper } from 'src/utils/mapper/base-dto-mapper';
import { SpisakGostijuEntity } from '../entity/spisak-gostiju.entity';
import { SpisakGostijuDto } from '../dto/spisak-gostiju.dto';

export class SpisakGostijuEntityToDtoMapper extends BaseDtoMapper<
  SpisakGostijuEntity,
  SpisakGostijuDto
> {
  toDto(entity: SpisakGostijuEntity): SpisakGostijuDto {
    const { brojGostiju, imenaGostiju, prezimenaGostiju } = entity;

    return {
      brojGostiju,
      imenaGostiju,
      prezimenaGostiju,
    } as SpisakGostijuDto;
  }
}
