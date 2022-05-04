import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BibleModule } from './bible/bible.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    BibleModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
