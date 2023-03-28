import WeatherMappers from './weather/weather.model';

export type { WeatherFromApi, Weather } from './weather/weather.interface';
export const weatherMappers = new WeatherMappers();
