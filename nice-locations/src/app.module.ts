import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { LocationModule } from './location/location.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [LocationModule, ConfigModule, DatabaseModule]
})
export class AppModule { }
