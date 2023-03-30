import WeatherMappers from './weather/weather.model';
import LocationMappers from './location/location.model';

export type { WeatherFromApi, Weather } from './weather/weather.interface';
export const weatherMappers = new WeatherMappers();

export type {
  LocationFromGeolocation,
  Location,
} from './location/location.interface';
export const locationMappers = new LocationMappers();
