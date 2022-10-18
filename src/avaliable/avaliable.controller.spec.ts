import { Test, TestingModule } from '@nestjs/testing';
import { AvaliableController } from './avaliable.controller';
import { AvaliableService } from './avaliable.service';

describe('AvaliableController', () => {
  let controller: AvaliableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvaliableController],
      providers: [AvaliableService],
    }).compile();

    controller = module.get<AvaliableController>(AvaliableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
