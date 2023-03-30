import React, { FC, PropsWithChildren } from 'react';
import { Provider } from 'mobx-react';
import store from '~/stores';

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider rootStore={store}>{children}</Provider>;
};

export default StoreProvider;
