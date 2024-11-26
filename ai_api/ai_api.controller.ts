import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AiApiService } from './ai_api.service';
import { CreateAiApiDto } from './dto/create-ai_api.dto';
import { UpdateAiApiDto } from './dto/update-ai_api.dto';

@Controller('ai-api')
export class AiApiController {
  constructor(private readonly aiApiService: AiApiService) {}

  @Post()
  create(@Body() createAiApiDto: CreateAiApiDto) {
    return this.aiApiService.create(createAiApiDto);
  }

  @Get()
  findAll() {
    return this.aiApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aiApiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAiApiDto: UpdateAiApiDto) {
    return this.aiApiService.update(+id, updateAiApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aiApiService.remove(+id);
  }
}
