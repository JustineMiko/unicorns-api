import { Test, TestingModule } from '@nestjs/testing';
import { UnicornController } from './unicorn.controller';
import { UnicornService } from './unicorn.service';

describe('UnicornController', () => {
  let controller: UnicornController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnicornController],
      providers: [UnicornService],
    }).compile();

    controller = module.get<UnicornController>(UnicornController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
