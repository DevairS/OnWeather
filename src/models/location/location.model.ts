import {
  ILocationMappers,
  Location,
  LocationFromGeolocation,
} from './location.interface';

export default class LocationMappers implements ILocationMappers {
  mapLocation(location: LocationFromGeolocation): Location {
    try {
      return { lat: location.coords.latitude, lon: location.coords.longitude };
    } catch (err) {
      const error = err as Error;
      throw new Error(error.message);
    }
  }
}
