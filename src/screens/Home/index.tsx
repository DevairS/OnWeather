import React, { FC } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { Routes } from '../../enum';
import { NavigationActions } from '../../routes';

const HomeScreen: FC = () => {
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button
        title="Go to Start"
        onPress={() => NavigationActions.navigate(Routes.START)}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
