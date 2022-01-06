import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LocationService } from './location.service';
import { Location } from "./location.entity";
import { LocationRepository } from './location.repository';
import { LocationDto } from './location.dto';

describe('LocationService', () => {
  let locationService: LocationService;
  let locationRepository: LocationRepository;

  const mockLocationRepository = {
  }

  const locationRepositoryProvider = {
    provide: getRepositoryToken(LocationRepository),
    useValue: mockLocationRepository
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationService, locationRepositoryProvider]
    }).compile();

    locationRepository = module.get(getRepositoryToken(LocationRepository))
    locationService = module.get<LocationService>(LocationService);
  });

  it('should be defined', () => {
    expect(locationService).toBeDefined();
  });

});
