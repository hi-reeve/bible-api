import { Test, TestingModule } from '@nestjs/testing';
import { BibleService } from './bible.service';

describe('BibleService', () => {
  let service: BibleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BibleService],
    }).compile();

    service = module.get<BibleService>(BibleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
