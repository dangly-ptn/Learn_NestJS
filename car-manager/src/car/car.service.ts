import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarDto } from './car.dto';
import { ICar } from './interfaces/car.interface';

@Injectable()
export class CarService {
  constructor(
    @InjectModel('Car')
    private readonly carModel: Model<ICar>
  ) { }

  async getCars(): Promise<CarDto[]> {
    const cars = await this.carModel.find()
    return cars
  }

  async getCarById(id: number): Promise<CarDto> {
    const car = await this.carModel.findOne({ id })
    return car
  }

  async postCar(newCar: CarDto): Promise<CarDto> {
    const car = new this.carModel(newCar)
    return car.save()
  }

  async putCarById(id: number, propertyName: string, propertyValue: string): Promise<any> {
    const car = await this.carModel.findOneAndUpdate({ id }, {
      [propertyName]: propertyValue
    })
    return this.getCarById(id)
  }

  async deleteCarById(id: number): Promise<any> {
    const car = await this.carModel.deleteOne({ id })
    return car
  }
}
