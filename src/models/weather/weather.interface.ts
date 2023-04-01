import { Icons } from '~/assets';

export interface WeatherFromApi {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: keyof Icons;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface WeatherMain {
  main: string;
  description: string;
  icon: keyof Icons;
}

export interface Weather {
  name: string;
  date: Date;
  temp: number;
  weather: WeatherMain;
  humidity: number;
  feelsLike: number;
  sunrise: Date;
  sunset: Date;
}

export interface IWeatherMappers {
  mapWeather(weather: WeatherFromApi): Weather;
}
