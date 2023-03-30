import React, { FC } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import { NavigationParams } from '~/types/navigation';
import { NavigationActions, Navigation } from '~/routes';
import Providers from '~/providers';

import '~/utils/config/reactotron';

const App: FC = () => {
  return (
    <Providers>
      <Navigation
        setNavigationTopRef={(
          navigatorRef: NavigationContainerRef<NavigationParams>,
        ) => NavigationActions.setTopLevelNavigator(navigatorRef)}
      />
    </Providers>
  );
};

export default App;
