import WeatherStore from './weather.store';

class RootStore {
  weather: WeatherStore;

  constructor() {
    this.weather = new WeatherStore();
  }
}

const store = new RootStore();

export { RootStore, WeatherStore };
export default store;
