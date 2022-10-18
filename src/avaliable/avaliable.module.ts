import { Module } from '@nestjs/common';
import { AvaliableService } from './avaliable.service';
import { AvaliableController } from './avaliable.controller';

@Module({
  controllers: [AvaliableController],
  providers: [AvaliableService]
})
export class AvaliableModule {}
