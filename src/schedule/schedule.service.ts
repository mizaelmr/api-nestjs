import { CreateScheduleDto } from './dto/create-schedule.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel('Schedule')
    private readonly scheduleModel: Model<CreateScheduleDto>,
  ) {}

  async create(createScheduleDto: CreateScheduleDto) {
    try {
      console.log(createScheduleDto, 'bbbb');

      await this.scheduleModel.create(createScheduleDto);
    } catch (error) {
      console.error(error);
    }
  }

  async findAll() {
    try {
      const response = await this.scheduleModel.find();
      return response;
    } catch (error) {}
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
