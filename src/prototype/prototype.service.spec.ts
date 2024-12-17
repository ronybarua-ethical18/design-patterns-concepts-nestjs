import { Test, TestingModule } from '@nestjs/testing';
import { PrototypeService } from './prototype.service';

describe('PrototypeService', () => {
  let service: PrototypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrototypeService],
    }).compile();

    service = module.get<PrototypeService>(PrototypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
