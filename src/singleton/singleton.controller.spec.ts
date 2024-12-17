import { Test, TestingModule } from '@nestjs/testing';
import { SingletonController } from './singleton.controller';
import { SingletonService } from './singleton.service';

describe('SingletonController', () => {
  let controller: SingletonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SingletonController],
      providers: [SingletonService],
    }).compile();

    controller = module.get<SingletonController>(SingletonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
