import React, { FC } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import { NavigationParams } from './types/navigation';
import { NavigationActions, Navigation } from './routes';

const App: FC = () => {
  return (
    <Navigation
      setNavigationTopRef={(
        navigatorRef: NavigationContainerRef<NavigationParams>,
      ) => NavigationActions.setTopLevelNavigator(navigatorRef)}
    />
  );
};

export default App;
