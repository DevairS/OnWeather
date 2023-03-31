import WeatherMappers from './weather/weather.model';
import ForecastMappers from './forecast/forecast.model';
import LocationMappers from './location/location.model';

export type { WeatherFromApi, Weather } from './weather/weather.interface';
export const weatherMappers = new WeatherMappers();

export type { ForecastFromApi, Forecast } from './forecast/forecast.interface';
export const forecastMappers = new ForecastMappers();

export type {
  LocationFromGeolocation,
  Location,
} from './location/location.interface';
export const locationMappers = new LocationMappers();
