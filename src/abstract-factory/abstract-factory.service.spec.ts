import { Test, TestingModule } from '@nestjs/testing';
import { AbstractFactoryService } from './abstract-factory.service';

describe('AbstractFactoryService', () => {
  let service: AbstractFactoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbstractFactoryService],
    }).compile();

    service = module.get<AbstractFactoryService>(AbstractFactoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
