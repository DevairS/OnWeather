import React, { FC, useCallback, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Text } from 'react-native';
import { Routes } from '~/enum';
import { useStores } from '~/hooks';
import { NavigationActions } from '~/routes';
import { Wrapper } from './style';

const StartScreen: FC = () => {
  const { weather, app } = useStores();
  const { location } = app;

  const getCurrentWeather = useCallback(async () => {
    if (location.lat && location.lon) {
      await weather.getCurrentWeather(location.lat, location.lon);
      NavigationActions.navigate(Routes.HOME);
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
      <Text>Start Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => NavigationActions.navigate(Routes.HOME)}
      />
    </Wrapper>
  );
};

export default observer(StartScreen);
