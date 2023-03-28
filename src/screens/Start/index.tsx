import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, SafeAreaView, Text } from 'react-native';
import { Routes } from '../../enum';
import { useStores } from '../../hooks';
import { NavigationActions } from '../../routes';

const StartScreen: FC = () => {
  const { weather } = useStores();

  useEffect(() => {
    weather.getCurrentWeather(-20.763091, -41.53266);
  }, []);

  return (
    <SafeAreaView>
      <Text>StartPage</Text>
      <Button
        title="Go to Home"
        onPress={() => NavigationActions.navigate(Routes.HOME)}
      />
    </SafeAreaView>
  );
};

export default observer(StartScreen);
