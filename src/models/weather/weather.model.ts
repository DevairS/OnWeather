import { timestampToDate } from '~/utils';
import { IWeatherMappers, Weather, WeatherFromApi } from './weather.interface';

export default class WeatherMappers implements IWeatherMappers {
  mapWeather(weather: WeatherFromApi): Weather {
    try {
      return {
        name: weather.name,
        date: timestampToDate(weather.dt),
        temp: Math.round(weather.main.temp),
        weather: {
          main: weather?.weather[0]?.main,
          description: weather?.weather[0]?.description,
          icon: weather?.weather[0]?.icon,
        },
        humidity: weather.main.humidity,
        feelsLike: Math.round(weather.main.feels_like),
        sunrise: timestampToDate(weather.sys.sunrise),
        sunset: timestampToDate(weather.sys.sunset),
      };
    } catch (err) {
      const error = err as Error;
      throw new Error(error.message);
    }
  }
}
