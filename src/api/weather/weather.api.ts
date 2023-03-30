import { LangEnum, UnitsEnum } from '~/enum';
import { WeatherFromApi, weatherMappers, Weather } from '~/models';
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
}
