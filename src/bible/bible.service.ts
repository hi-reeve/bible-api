import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, ObservableInput } from 'rxjs';

@Injectable()
export class BibleService {
  constructor(private readonly httpService: HttpService) {}

  async bibles(
    name?: string,
  ): Promise<ObservableInput<AxiosResponse<any, any>>> {
    return this.httpService
      .get('bibles', {
        params: {
          name,
        },
      })
      .pipe(map((res) => res.data));
  }

  async bible(bibleId: string) {
    return this.httpService
      .get(`bibles/${bibleId}`)
      .pipe(map((res) => res.data));
  }
  async books(bibleId: string) {
    return this.httpService
      .get(`bibles/${bibleId}/books`)
      .pipe(map((res) => res.data));
  }
  async book(bibleId: string, bookId: string) {
    return this.httpService
      .get(`bibles/${bibleId}/books/${bookId}`)
      .pipe(map((res) => res.data));
  }
  async chapters(bibleId: string, bookId: string) {
    return this.httpService
      .get(`bibles/${bibleId}/books/${bookId}/chapters`)
      .pipe(map((res) => res.data));
  }
  async chapter(bibleId: string, chapterId: string) {
    return this.httpService
      .get(`bibles/${bibleId}/chapters/${chapterId}`)
      .pipe(map((res) => res.data));
  }
  async verses(bibleId: string, chapterId: string) {
    console.log('asd');
    return this.httpService
      .get(`bibles/${bibleId}/chapters/${chapterId}/verses`)
      .pipe(map((res) => res.data));
  }
  async search(bibleId: string, query: string) {
    return this.httpService
      .get(`bibles/${bibleId}/search`, {
        params: {
          query,
        },
      })
      .pipe(map((res) => res.data));
  }
}
