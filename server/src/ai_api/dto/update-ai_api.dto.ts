import { PartialType } from '@nestjs/mapped-types';
import { CreateAiApiDto } from './create-ai_api.dto';

export class UpdateAiApiDto extends PartialType(CreateAiApiDto) {}
