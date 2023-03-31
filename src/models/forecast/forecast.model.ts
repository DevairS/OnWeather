import { timestampToDate } from '~/utils';
import {
  IForecastMappers,
  Forecast,
  ForecastFromApi,
} from './forecast.interface';

export default class ForecastMappers implements IForecastMappers {
  mapForecast(forecast: ForecastFromApi): Forecast[] {
    try {
      return forecast.list.map(f => ({
        date: timestampToDate(f.dt),
        temp: Math.round(f.main.temp),
        forecast: {
          main: f?.weather[0]?.main,
          description: f?.weather[0]?.description,
          icon: f?.weather[0]?.icon,
        },
      }));
    } catch (err) {
      const error = err as Error;
      throw new Error(error.message);
    }
  }
}
