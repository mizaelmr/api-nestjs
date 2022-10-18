import { CreateFinanceDto } from './dto/create-finance.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, HttpException } from '@nestjs/common';
import { UpdateFinanceDto } from './dto/update-finance.dto';
import { Model } from 'mongoose';

@Injectable()
export class FinanceService {
  constructor(
    @InjectModel('Finance')
    private financeModel: Model<CreateFinanceDto>,
  ) {}

  create(req: CreateFinanceDto) {
    try {
      const result = this.financeModel.create(req);
      return result;
    } catch (error) {
      console.error(error, 'perdeu pai');
    }
  }

  findAll() {
    try {
      const res = this.financeModel.find();
      if (!res) {
        throw new HttpException('Não existem registros', 404);
      }
      return res;
    } catch (error) {
      console.error(error);
    }
  }

  findOne(id: string) {
    try {
      const res = this.financeModel.findById(id);
      if (!res) {
        throw new HttpException('Não existem registros', 404);
      }
      return res;
    } catch (error) {
      console.error(error);
    }
  }

  update(id: number, updateFinanceDto: UpdateFinanceDto) {
    return `This action updates a #${id} finance`;
  }

  remove(id: number) {
    return `This action removes a #${id} finance`;
  }
}
