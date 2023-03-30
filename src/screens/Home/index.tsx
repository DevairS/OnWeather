import React, { FC } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { Routes } from '~/enum';
import { useStores } from '~/hooks';
import { NavigationActions } from '~/routes';

const HomeScreen: FC = () => {
  const { weather } = useStores();
  return (
    <SafeAreaView>
      <Text>Home Screen {weather.weatherData.name}</Text>
      <Button
        title="Go to Start"
        onPress={() => NavigationActions.navigate(Routes.START)}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
