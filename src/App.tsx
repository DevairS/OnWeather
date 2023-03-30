import React, { FC } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import { NavigationParams } from '~/types/navigation';
import { NavigationActions, Navigation } from '~/routes';
import store from '~/stores';
import { Provider as StoreProvider } from 'mobx-react';
import { ThemeProvider } from 'styled-components/native';
import '~/utils/config/reactotron';
import { theme } from '~/theme';

const App: FC = () => {
  return (
    <StoreProvider rootStore={store}>
      <ThemeProvider theme={theme}>
        <Navigation
          setNavigationTopRef={(
            navigatorRef: NavigationContainerRef<NavigationParams>,
          ) => NavigationActions.setTopLevelNavigator(navigatorRef)}
        />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
