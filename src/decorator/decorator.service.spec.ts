import { Test, TestingModule } from '@nestjs/testing';
import { LoggingMessageService } from './decorator.service';

describe('DecoratorService', () => {
  let service: LoggingMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggingMessageService],
    }).compile();

    service = module.get<LoggingMessageService>(LoggingMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
