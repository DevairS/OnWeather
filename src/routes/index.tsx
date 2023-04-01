/* eslint-disable react/no-unstable-nested-components */
import React, { FC } from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { Routes } from '~/enum';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as NavigationActions from './actions';
import { NavigationParams } from '~/types/navigation';
import { StartScreen, HomeScreen, SettingsScreen } from '~/screens';
import { useIntl } from 'react-intl';
import IconSettings from '~/assets/icons/settings.svg';
import IconHome from '~/assets/icons/home.svg';
import { useTheme } from 'styled-components';

type Props = {
  setNavigationTopRef: (
    navigatorRef: NavigationContainerRef<NavigationParams>,
  ) => void;
};

const Tab = createBottomTabNavigator();

const Navigation: FC<Props> = ({ setNavigationTopRef }) => {
  const theme = useTheme();
  const { formatMessage } = useIntl();
  const navigatorOptions = {
    headerShown: false,
    tabBarActiveTintColor: theme.colors.active,
    tabBarStyle: {
      backgroundColor: theme.colors.surface,
    },
  };

  return (
    <NavigationContainer ref={setNavigationTopRef}>
      <Tab.Navigator screenOptions={navigatorOptions}>
        <Tab.Screen
          name={Routes.START}
          component={StartScreen}
          options={{
            tabBarStyle: { display: 'none' },
            tabBarItemStyle: { display: 'none' },
          }}
        />
        <Tab.Screen
          name={Routes.HOME}
          component={HomeScreen}
          options={{
            tabBarLabel: formatMessage({
              id: 'Navigator.Tab.Home',
              defaultMessage: 'Home',
            }),
            tabBarIcon: ({ color, size }) => (
              <IconHome
                width={size}
                height={size}
                fill={color}
                stroke={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.SETTINGS}
          component={SettingsScreen}
          options={{
            tabBarLabel: formatMessage({
              id: 'Navigator.Tab.Settings',
              defaultMessage: 'Configurações',
            }),
            tabBarIcon: ({ color, size }) => (
              <IconSettings width={size} height={size} fill={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export { NavigationActions, Navigation };
