import React, { FC } from 'react';
import { FormattedDate, useIntl } from 'react-intl';
import { View } from 'react-native';
import { Button } from '~/components';
import { Weather } from '~/models';
import { Wrapper, Localization, TextDate, IconUpdate } from './styles';

type Props = {
  weatherData: Weather;
  updateWeather(): void;
};

const Header: FC<Props> = ({ weatherData, updateWeather }) => {
  const { formatMessage } = useIntl();
  return (
    <Wrapper>
      <View>
        <Localization>{weatherData.name}</Localization>
        <TextDate>
          {!!weatherData && (
            <FormattedDate
              month="long"
              day="numeric"
              weekday="long"
              value={weatherData.date}
            />
          )}
        </TextDate>
      </View>
      <Button
        onPress={updateWeather}
        text={formatMessage({
          id: 'Home.Header.Update',
          defaultMessage: 'Atualizar',
        })}>
        <IconUpdate icon="refresh" />
      </Button>
    </Wrapper>
  );
};

export default Header;
