import { WeatherApi } from '~/api';
import { makeAutoObservable, runInAction } from 'mobx';
import { Weather } from '~/models';
import { LangEnum, UnitsEnum } from '~/enum';

class WeatherStore {
  weatherApi: WeatherApi;
  weatherData: Weather = {} as Weather;

  constructor() {
    makeAutoObservable(this);
    this.weatherApi = new WeatherApi();
  }

  getCurrentWeather = async (lat: number, lon: number): Promise<void> => {
    const data = await this.weatherApi.getWeather(
      lat,
      lon,
      UnitsEnum.celsius,
      LangEnum.pt_br
    );
    console.log('data', data)
    runInAction(() => {
      this.weatherData = data;
    });
  };
}

export default WeatherStore;
