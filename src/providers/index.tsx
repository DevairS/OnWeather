import React, { FC, PropsWithChildren } from 'react';
import LocationProvider from './Location';
import StoreProvider from './Store';
import ThemeProvider from './Theme';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <LocationProvider>{children}</LocationProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default Providers;
