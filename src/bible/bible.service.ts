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
}
