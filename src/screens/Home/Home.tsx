import React, { FC } from 'react';
import { UnitsEnum } from '~/enum';
import { Weather as WeatherType, Forecast as ForecastType } from '~/models';
import Header from './Header';
import Weather from './Weather';
import { Wrapper, WrapperContent } from './styles';
import Forecast from './Forecast';

type Props = {
  weatherData: WeatherType;
  forecastData: ForecastType[];
  updateWeather(): void;
  activeUnit: UnitsEnum;
};

const Home: FC<Props> = ({
  weatherData,
  forecastData,
  updateWeather,
  activeUnit,
}) => {
  return (
    <Wrapper>
      <WrapperContent>
        <Header weatherData={weatherData} updateWeather={updateWeather} />
        <Weather weatherData={weatherData} activeUnit={activeUnit} />
        <Forecast forecastData={forecastData} activeUnit={activeUnit} />
      </WrapperContent>
    </Wrapper>
  );
};

export default Home;
