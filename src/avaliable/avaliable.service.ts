import { Injectable } from '@nestjs/common';
import { CreateAvaliableDto } from './dto/create-avaliable.dto';
import { UpdateAvaliableDto } from './dto/update-avaliable.dto';

@Injectable()
export class AvaliableService {
  create(createAvaliableDto: CreateAvaliableDto) {
    return 'This action adds a new avaliable';
  }

  findAll() {
    return `This action returns all avaliable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avaliable`;
  }

  update(id: number, updateAvaliableDto: UpdateAvaliableDto) {
    return `This action updates a #${id} avaliable`;
  }

  remove(id: number) {
    return `This action removes a #${id} avaliable`;
  }
}
