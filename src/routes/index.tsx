import React, { FC } from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { Routes } from '../enum';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as NavigationActions from './actions';
import { NavigationParams } from '../types/navigation';
import { StartScreen, HomeScreen } from '../screens';

type Props = {
  setNavigationTopRef: (
    navigatorRef: NavigationContainerRef<NavigationParams>,
  ) => void;
};

const Tab = createBottomTabNavigator();

const Navigation: FC<Props> = ({ setNavigationTopRef }) => {
  const navigatorOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer ref={setNavigationTopRef}>
      <Tab.Navigator screenOptions={navigatorOptions}>
        <Tab.Screen
          name={Routes.START}
          component={StartScreen}
          options={{
            tabBarLabel: Routes.START,
          }}
        />
        <Tab.Screen
          name={Routes.HOME}
          component={HomeScreen}
          options={{
            tabBarLabel: Routes.HOME,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export { NavigationActions, Navigation };
