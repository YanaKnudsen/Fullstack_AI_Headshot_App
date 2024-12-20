import { Test, TestingModule } from '@nestjs/testing';
import { AiApiController } from './ai_api.controller';
import { AiApiService } from './ai_api.service';

describe('AiApiController', () => {
  let controller: AiApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AiApiController],
      providers: [AiApiService],
    }).compile();

    controller = module.get<AiApiController>(AiApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
