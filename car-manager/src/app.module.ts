import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://haidang:VLsdbPxTvnUWGPdC@cluster0.5acgb.mongodb.net/nestjs-app?retryWrites=true&w=majority'),
    CarModule
  ]
})
export class AppModule {}
