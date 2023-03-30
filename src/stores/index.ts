import AppStore from './app.store';
import WeatherStore from './weather.store';

class RootStore {
  app: AppStore;
  weather: WeatherStore;

  constructor() {
    this.app = new AppStore();
    this.weather = new WeatherStore();
  }
}

const store = new RootStore();

export { RootStore, WeatherStore, AppStore };
export default store;
