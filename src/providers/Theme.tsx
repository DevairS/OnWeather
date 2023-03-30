import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider as Provider } from 'styled-components/native';
import { theme } from '~/theme';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
