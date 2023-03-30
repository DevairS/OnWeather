import React, { FC, useCallback, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, SafeAreaView, Text } from 'react-native';
import { Routes } from '~/enum';
import { useStores } from '~/hooks';
import { NavigationActions } from '~/routes';

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
    <SafeAreaView>
      <Text>Start Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => NavigationActions.navigate(Routes.HOME)}
      />
    </SafeAreaView>
  );
};

export default observer(StartScreen);
