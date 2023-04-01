import { WeatherApi } from '~/api';
import { makeAutoObservable, runInAction } from 'mobx';
import { Forecast, Weather } from '~/models';
import { RootStore } from '.';

class WeatherStore {
  rootStore: RootStore;
  weatherApi: WeatherApi;
  weatherData: Weather = {} as Weather;
  forecastData: Forecast[] = [];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.weatherApi = new WeatherApi();
  }

  getCurrentWeather = async (lat: number, lon: number): Promise<void> => {
    const data = await this.weatherApi.getWeather(
      lat,
      lon,
      this.rootStore.app.unit,
      this.rootStore.app.lang,
    );
    runInAction(() => {
      this.weatherData = data;
    });
  };

  getForecastWeather = async (lat: number, lon: number): Promise<void> => {
    const data = await this.weatherApi.getForecast(
      lat,
      lon,
      this.rootStore.app.unit,
      this.rootStore.app.lang,
    );
    runInAction(() => {
      this.forecastData = data;
    });
  };
}

export default WeatherStore;
