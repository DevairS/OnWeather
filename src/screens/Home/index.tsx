import React, { FC, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '~/hooks';
import Home from './Home';

const HomeContainer: FC = () => {
  const { weather, app } = useStores();
  const { location } = app;

  const updateWeather = useCallback(async () => {
    await weather.getCurrentWeather(location.lat, location.lon);
  }, [location.lat, location.lon, weather]);

  return (
    <Home weatherData={weather.weatherData} updateWeather={updateWeather} />
  );
};

export default observer(HomeContainer);
