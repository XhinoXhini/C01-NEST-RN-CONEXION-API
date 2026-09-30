import { Controller, Get, Param } from '@nestjs/common';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.heroesService.findOne(Number(id));
  }
}