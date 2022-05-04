import { Module } from '@nestjs/common';
import { BibleService } from './bible.service';
import { BibleController } from './bible.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get('BASE_URL'),
        headers: {
          ['api-key']: configService.get('API_KEY'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [BibleService],
  controllers: [BibleController],
})
export class BibleModule {}
