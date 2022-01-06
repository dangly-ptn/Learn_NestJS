import { Body, Controller, Delete, Get, Param, Patch, Post, Render, UsePipes, ValidationPipe } from '@nestjs/common';
import { LocationDto } from './location.dto';
import { Location } from './location.entity';
import { LocationService } from './location.service';
import { LocationPipe } from './pipes/location.pipe';

@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) { }

  @Get()
  @Render('location.hbs')
  async getAllLocations(): Promise<{locations: Location[]}> {
    return { locations: await this.locationService.getAllLocations() }
  }

  @Get('/:id')
  @Render('location.hbs')
  async getLocation(@Param('id') id: number): Promise<{location: Location}> {
    return {location: await this.locationService.getLocation(id)}
  }

  @Post()
  @UsePipes(ValidationPipe)
  createLocation(@Body() locationDto: LocationDto): Promise<Location> {
    return this.locationService.createLocation(locationDto)
  }

  @Patch('/:id/name')
  updateLocation(
    @Param('id') id: number,
    @Body('name', LocationPipe) name: string
  ): Promise<Location> {
    return this.locationService.updateLocation(id, name)
  }

  @Delete('/:id')
  deleteLocation(@Param('id') id: number): Promise<void> {
    return this.locationService.deleteLocation(id)
  }
}
