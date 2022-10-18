import { FinanceController } from './finance.controller';
import { FinanceService } from './finance.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { financeSchema } from './schemas/finance.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Finance', schema: financeSchema }]),
  ],
  controllers: [FinanceController],
  providers: [FinanceService],
})
export class FinanceModule {}
