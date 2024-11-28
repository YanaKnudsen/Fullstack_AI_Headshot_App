import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AiApiService } from './ai_api.service';
import {CreateAIPhotoDto} from "./dto/createAIPhoto.dto";

@Controller('ai-api')
export class AiApiController {
  constructor(private readonly aiApiService: AiApiService) {}

  @Post("/magic-image")
  create(@Body() magicImage: CreateAIPhotoDto) {
    return this.aiApiService.generateImage(magicImage);
  }


}
