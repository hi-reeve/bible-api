import {
  CacheInterceptor,
  Controller,
  Get,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { Request } from 'express';
import { BibleService } from './bible.service';

@Controller('bible')
@UseInterceptors(CacheInterceptor)
export class BibleController {
  constructor(private readonly bibleService: BibleService) {}

  @Get()
  async bibles(@Req() request: Request) {
    return this.bibleService.bibles(request.query.name as string);
  }
}
