import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CarDto } from './car.dto';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) { }

  @Get()
  async getCars(): Promise<CarDto[]> {
    return this.carService.getCars()
  }

  @Get(':id')
  async getCarById(@Param('id') id: number): Promise<CarDto> {
    return this.carService.getCarById(id)
  }

  @Post()
  async postCar(@Body() newCar: CarDto): Promise<CarDto> {
    return this.carService.postCar(newCar)
  }

  @Put(':id')
  async putCarById(@Param('id') id: number, @Query() query): Promise<any> {
    const propertyName = query.property_name
    const propertyValue = query.property_value
    return this.carService.putCarById(id, propertyName, propertyValue)
  }

  @Delete(':id')
  async deleteCarById(@Param('id') id: number): Promise<any> {
    return this.carService.deleteCarById(id)
  }

}
