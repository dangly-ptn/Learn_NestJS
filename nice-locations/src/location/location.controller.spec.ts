import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';

describe('LocationController', () => {
  let locationController: LocationController;
  let locationService: LocationService;

  const mockLocationService = {
    getAllLocations: () => [],
    getLocation: (_id: number) => { return {}; },
  };

  const locationServiceProvider = {
    provide: LocationService,
    useValue: mockLocationService,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationController],
      providers: [locationServiceProvider]
    }).compile();

    locationService = module.get<LocationService>(LocationService)
    locationController = module.get<LocationController>(LocationController);
  });

  it('should be defined', () => {
    expect(locationController).toBeDefined();
  });

  describe('getAllLocations', () => {
    it('should return collection of locations', async () => {
      jest.spyOn(locationService, 'getAllLocations').mockImplementation(async () => [{ id: 1, name: 'A' }]);

      expect(await locationController.getAllLocations()).toStrictEqual({ locations: [{ id: 1, name: 'A' }] });
    });
  });

  describe('getOneLocation', () => {
    it('should return one location', async () => {
      jest.spyOn(locationService, 'getLocation').mockImplementation(async (_id) => { return { id: 1, name: 'A' } });

      expect(await locationController.getLocation(1)).toStrictEqual({ location: { id: 1, name: 'A' } });
    });
  });

});
