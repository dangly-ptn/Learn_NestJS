import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationDto } from './location.dto';
import { LocationRepository } from './location.repository';
import { Location } from './location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationRepository)
    private locationRepository: LocationRepository
  ) { }

  async getAllLocations(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  async getLocation(id: number): Promise<Location> {
    return this.locationRepository.findOne(id)
  }

  async createLocation(locationDto: LocationDto): Promise<Location> {
    const { name } = locationDto
    const location = this.locationRepository.create({ name })
    await this.locationRepository.save(location)
    return location;
  }

  async updateLocation(id: number, name: string): Promise<Location> {
    const locationId = await this.getLocation(id)
    locationId.name = name
    await this.locationRepository.save(locationId)
    return locationId
  }

  async deleteLocation(id: number): Promise<void> {
    await this.locationRepository.delete(id)
  }
}
