import { Test, TestingModule } from '@nestjs/testing';
import { AvaliableService } from './avaliable.service';

describe('AvaliableService', () => {
  let service: AvaliableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvaliableService],
    }).compile();

    service = module.get<AvaliableService>(AvaliableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
