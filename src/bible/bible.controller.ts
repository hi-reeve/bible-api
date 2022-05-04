import {
  CacheInterceptor,
  Controller,
  Get,
  Param,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { BibleService } from './bible.service';

@Controller('bible')
@UseInterceptors(CacheInterceptor)
export class BibleController {
  constructor(private readonly bibleService: BibleService) {}

  @Get()
  async bibles(@Query('name') name: string) {
    return this.bibleService.bibles(name);
  }

  @Get(':bibleId')
  async bible(@Param('bibleId') bibleId: string) {
    return this.bibleService.bible(bibleId);
  }

  @Get(':bibleId/books')
  async books(@Param('bibleId') bibleId: string) {
    return this.bibleService.books(bibleId);
  }

  @Get(':bibleId/books/:bookId')
  async book(
    @Param('bibleId') bibleId: string,
    @Param('bookId') bookId: string,
  ) {
    return this.bibleService.book(bibleId, bookId);
  }

  @Get(':bibleId/books/:bookId/chapters')
  async chapters(
    @Param('bibleId') bibleId: string,
    @Param('bookId') bookId: string,
  ) {
    return this.bibleService.chapters(bibleId, bookId);
  }

  @Get(':bibleId/chapters/:chapterId')
  async chapter(
    @Param('bibleId') bibleId: string,
    @Param('chapterId') chapterId: string,
  ) {
    return this.bibleService.chapter(bibleId, chapterId);
  }

  @Get(':bibleId/chapters/:chapterId/verses')
  async verses(
    @Param('bibleId') bibleId: string,
    @Param('chapterId') chapterId: string,
  ) {
    return this.bibleService.verses(bibleId, chapterId);
  }

  @Get(':bibleId/search')
  async search(
    @Param('bibleId') bibleId: string,
    @Query('query') query: string,
  ) {
    return this.bibleService.search(bibleId, query);
  }
}
