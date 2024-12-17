import { Test, TestingModule } from '@nestjs/testing';
import { CompositeController } from './composite.controller';
import { CompositeService } from './composite.service';

describe('CompositeController', () => {
  let controller: CompositeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompositeController],
      providers: [CompositeService],
    }).compile();

    controller = module.get<CompositeController>(CompositeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
