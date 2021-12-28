import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [LocationModule, ConfigModule]
})
export class AppModule { }
