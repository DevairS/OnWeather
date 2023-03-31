import { LangEnum, UnitsEnum } from '~/enum';
import {
  WeatherFromApi,
  weatherMappers,
  Weather,
  Forecast,
  ForecastFromApi,
  forecastMappers,
} from '~/models';
import api from '../api';

export default class WeatherApi {
  getWeather = async (
    lat: number,
    lon: number,
    unit: UnitsEnum,
    lang: LangEnum,
  ): Promise<Weather> => {
    try {
      const { data } = await api.get<WeatherFromApi>('/weather', {
        params: {
          lat,
          lon,
          units: unit,
          lang: lang,
        },
      });
      return weatherMappers.mapWeather(data);
    } catch (err) {
      const error = err as Error;
      throw new Error(error.message);
    }
  };
  getForecast = async (
    lat: number,
    lon: number,
    unit: UnitsEnum,
    lang: LangEnum,
  ): Promise<Forecast[]> => {
    try {
      const { data } = await api.get<ForecastFromApi>('/forecast', {
        params: {
          lat,
          lon,
          units: unit,
          lang: lang,
        },
      });
      return forecastMappers.mapForecast(data);
    } catch (err) {
      const error = err as Error;
      throw new Error(error.message);
    }
  };
}
