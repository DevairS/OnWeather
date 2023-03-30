import React, { FC } from 'react';
import { UnitsEnum } from '~/enum';
import { Weather as WeatherType } from '~/models';
import Header from './Header';
import Weather from './Weather';
import { Wrapper, WrapperContent } from './styles';

type Props = {
  weatherData: WeatherType;
  updateWeather(): void;
  activeUnit: UnitsEnum;
};

const Home: FC<Props> = ({ weatherData, updateWeather, activeUnit }) => {
  return (
    <Wrapper>
      <WrapperContent>
        <Header weatherData={weatherData} updateWeather={updateWeather} />
        <Weather weatherData={weatherData} activeUnit={activeUnit} />
      </WrapperContent>
    </Wrapper>
  );
};

export default Home;
