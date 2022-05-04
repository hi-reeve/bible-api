import { Test, TestingModule } from '@nestjs/testing';
import { BibleController } from './bible.controller';

describe('BibleController', () => {
  let controller: BibleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BibleController],
    }).compile();

    controller = module.get<BibleController>(BibleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
