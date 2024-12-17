import { Test, TestingModule } from '@nestjs/testing';
import { PrototypeController } from './prototype.controller';
import { PrototypeService } from './prototype.service';

describe('PrototypeController', () => {
  let controller: PrototypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrototypeController],
      providers: [PrototypeService],
    }).compile();

    controller = module.get<PrototypeController>(PrototypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
