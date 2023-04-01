import React, { FC, PropsWithChildren } from 'react';
import { IntlProvider } from 'react-intl';
import { pt_br, en, fr } from '~/lang';
import { useStores } from '~/hooks';
import { observer } from 'mobx-react-lite';
import { LangEnumFromIntl } from '~/enum';

const locales = { pt_br, en, fr };
const LocationProvider: FC<PropsWithChildren> = ({ children }) => {
  const { app } = useStores();
  const messages = locales[app.lang];
  return (
    <IntlProvider
      locale={LangEnumFromIntl[app.lang]}
      defaultLocale="pt-BR"
      messages={messages}>
      {children}
    </IntlProvider>
  );
};

export default observer(LocationProvider);
