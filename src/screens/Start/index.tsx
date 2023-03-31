import React, { FC, useCallback, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Routes } from '~/enum';
import { useStores } from '~/hooks';
import { navigate } from '~/routes/actions';
import { TextLoading, Wrapper } from './style';

const StartScreen: FC = () => {
  const { weather, app } = useStores();
  const { location } = app;

  const getCurrentWeather = useCallback(async () => {
    if (location.lat && location.lon) {
      await Promise.all([
        weather.getCurrentWeather(location.lat, location.lon),
        weather.getForecastWeather(location.lat, location.lon),
      ]);
      navigate(Routes.HOME);
    }
  }, [location.lat, location.lon, weather]);

  const loadPermissions = useCallback(async () => {
    await app.getPermissionLocation();
  }, [app]);

  useEffect(() => {
    loadPermissions();
  }, [loadPermissions]);

  useEffect(() => {
    getCurrentWeather();
  }, [getCurrentWeather, location]);

  return (
    <Wrapper>
      <TextLoading>Loading APP</TextLoading>
    </Wrapper>
  );
};

export default observer(StartScreen);
