import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvaliableService } from './avaliable.service';
import { CreateAvaliableDto } from './dto/create-avaliable.dto';
import { UpdateAvaliableDto } from './dto/update-avaliable.dto';

@Controller('avaliable')
export class AvaliableController {
  constructor(private readonly avaliableService: AvaliableService) {}

  @Post()
  create(@Body() createAvaliableDto: CreateAvaliableDto) {
    return this.avaliableService.create(createAvaliableDto);
  }

  @Get()
  findAll() {
    return this.avaliableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaliableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvaliableDto: UpdateAvaliableDto) {
    return this.avaliableService.update(+id, updateAvaliableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avaliableService.remove(+id);
  }
}
