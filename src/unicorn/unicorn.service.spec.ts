import { Test, TestingModule } from '@nestjs/testing';
import { UnicornService } from './unicorn.service';

describe('UnicornService', () => {
  let service: UnicornService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnicornService],
    }).compile();

    service = module.get<UnicornService>(UnicornService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
