import React, { FC } from 'react';
import {
  Title,
  Wrapper,
  WrapperRow,
  WrapperConfig,
  Button,
  TitleScreen,
  WrapperContent,
  SubTitleScreen,
} from './styles';
import { LangEnum, UnitsEnum } from '~/enum';
import { FormattedMessage } from 'react-intl';

type Props = {
  handleSwitchUnit(unit: UnitsEnum): void;
  handleSwitchLang(lang: LangEnum): void;
  activeUnit: UnitsEnum;
  activeLang: LangEnum;
};

const Settings: FC<Props> = ({
  handleSwitchUnit,
  handleSwitchLang,
  activeUnit,
  activeLang,
}) => {
  return (
    <Wrapper>
      <WrapperContent>
        <TitleScreen>
          <FormattedMessage
            id="Home.Settings.Settings"
            defaultMessage="Configurações"
          />
        </TitleScreen>
        <SubTitleScreen>
          <FormattedMessage
            id="Home.Settings.Subhead"
            defaultMessage="Aqui você define as configurações no seu app"
          />
        </SubTitleScreen>
        <WrapperConfig>
          <Title>
            <FormattedMessage
              id="Home.Settings.Units"
              defaultMessage="Unidade de Temperatura"
            />
          </Title>
          <WrapperRow>
            {Object.entries(UnitsEnum).map(([key, value]) => (
              <Button
                key={key}
                onPress={() => handleSwitchUnit(value)}
                active={activeUnit === value}
                text={key}
              />
            ))}
          </WrapperRow>
        </WrapperConfig>
        <WrapperConfig>
          <Title>
            <FormattedMessage
              id="Home.Settings.Language"
              defaultMessage="Idioma"
            />
          </Title>
          <WrapperRow>
            {(Object.keys(LangEnum) as Array<LangEnum>).map(key => (
              <Button
                key={key}
                onPress={() => handleSwitchLang(key)}
                active={activeLang === key}
                text={key.toUpperCase().replace('_', '-')}
              />
            ))}
          </WrapperRow>
        </WrapperConfig>
      </WrapperContent>
    </Wrapper>
  );
};

export default Settings;
