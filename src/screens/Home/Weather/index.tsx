import React, { FC } from 'react';
import { Temperature } from '~/components';
import { UnitsEnum } from '~/enum';
import { Weather as WeatherType } from '~/models';
import { CardWeather, IconWeather, TempTitle, TempWrapper } from './styles';

type Props = {
  weatherData: WeatherType;
  activeUnit: UnitsEnum;
};

const Weather: FC<Props> = ({ weatherData, activeUnit }) => {
  console.log('weatherData', weatherData.weather.icon);
  return (
    <CardWeather>
      <TempWrapper>
        <TempTitle>{weatherData.weather.description}</TempTitle>
        <Temperature
          unit={activeUnit}
          temp={weatherData.temp}
          variant="extraLargeTitle"
        />
      </TempWrapper>
      <IconWeather url={weatherData.weather.icon} />
    </CardWeather>
  );
};

export default Weather;
