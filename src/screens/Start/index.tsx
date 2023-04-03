import React, { FC, useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Routes } from '~/enum';
import { useStores } from '~/hooks';
import { navigate } from '~/routes/actions';
import { Wrapper } from './styles';
import Lottie from 'lottie-react-native';
import { loading } from '~/assets';
import { PermissionModal } from '~/utils';

const StartScreen: FC = () => {
  const [visibleModal, setVisibleModal] = useState(false);
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
    try {
      await app.getPermissionLocation();
    } catch (error) {
      setVisibleModal(true);
    }
  }, [app]);

  useEffect(() => {
    console.log('entrei');
    loadPermissions();
  }, [loadPermissions]);

  useEffect(() => {
    getCurrentWeather();
  }, [getCurrentWeather, location]);

  return (
    <Wrapper>
      <Lottie source={loading} autoPlay loop />
      <PermissionModal visible={visibleModal} setVisible={setVisibleModal} />
    </Wrapper>
  );
};

export default observer(StartScreen);
