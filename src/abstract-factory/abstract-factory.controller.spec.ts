import { Test, TestingModule } from '@nestjs/testing';
import { AbstractFactoryController } from './abstract-factory.controller';

describe('AbstractFactoryController', () => {
  let controller: AbstractFactoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbstractFactoryController],
    }).compile();

    controller = module.get<AbstractFactoryController>(AbstractFactoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
