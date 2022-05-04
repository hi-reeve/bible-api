import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      message: 'Welcome to bible api',
      github: 'https://github.com/zynth17/bible-api',
    };
  }
}
