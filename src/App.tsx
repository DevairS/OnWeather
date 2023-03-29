import React, { FC } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import { NavigationParams } from '~/types/navigation';
import { NavigationActions, Navigation } from '~/routes';
import store from '~/stores';
import { Provider as StoreProvider } from 'mobx-react';
import '~/utils/config/reactotron';

const App: FC = () => {
  return (
    <StoreProvider rootStore={store}>
      <Navigation
        setNavigationTopRef={(
          navigatorRef: NavigationContainerRef<NavigationParams>,
        ) => NavigationActions.setTopLevelNavigator(navigatorRef)}
      />
    </StoreProvider>
  );
};

export default App;
