import { Module } from '@nestjs/common';
import { AiApiService } from './ai_api.service';
import { AiApiController } from './ai_api.controller';

@Module({
  controllers: [AiApiController],
  providers: [AiApiService],
})
export class AiApiModule {}
