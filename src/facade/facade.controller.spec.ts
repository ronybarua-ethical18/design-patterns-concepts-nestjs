import { Test, TestingModule } from '@nestjs/testing';
import { FacadeController } from './facade.controller';
import { FacadeService } from './facade.service';

describe('FacadeController', () => {
  let controller: FacadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacadeController],
      providers: [FacadeService],
    }).compile();

    controller = module.get<FacadeController>(FacadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
