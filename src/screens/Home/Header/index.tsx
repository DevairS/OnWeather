import React, { FC } from 'react';
import { FormattedDate } from 'react-intl';
import { View } from 'react-native';
import { Button } from '~/components';
import { Weather } from '~/models';
import { Wrapper, Localization, TextDate, IconUpdate } from './styles';

type Props = {
  weatherData: Weather;
  updateWeather(): void;
};

const Header: FC<Props> = ({ weatherData, updateWeather }) => {
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
      <Button onPress={updateWeather} text="Atualizar">
        <IconUpdate icon="refresh" />
      </Button>
    </Wrapper>
  );
};

export default Header;
