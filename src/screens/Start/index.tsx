import React, { FC } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { Routes } from '../../enum';
import { NavigationActions } from '../../routes';

const StartScreen: FC = () => {
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

export default StartScreen;
