import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PlanDogadjajaDataDto } from './dto/plan-dogadjaja-data.dto';
import { PlanDogadjajaService } from './plan-dogadjaja.service';

@Controller('plan-dogadjaja')
export class PlanDogadjajaController {
  constructor(private readonly service: PlanDogadjajaService) {}

  @Get()
  public getPlanoviDogadjaja() {
    return this.service.findAll();
  }

  @Get(':imePM')
  public findPlanoveDogadjaja(@Param('imePM') imePM: string) {
    return this.service.find(imePM);
  }

  @Post()
  public postPlanDogadjaja(@Body() planDogadjaja: PlanDogadjajaDataDto) {
    this.service.insert(planDogadjaja);
  }

  @Put()
  public putPlanDogadjaja(@Body() planDogadjaja: PlanDogadjajaDataDto) {
    this.service.update(planDogadjaja);
  }
}
