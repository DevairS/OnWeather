import React, { FC } from 'react';
import { Weather as WeatherType } from '~/models';
import Header from './Header';
import { Wrapper, WrapperContent } from './styles';

type Props = {
  weatherData: WeatherType;
  updateWeather(): void;
};

const Home: FC<Props> = ({ weatherData, updateWeather }) => {
  return (
    <Wrapper>
      <WrapperContent>
        <Header weatherData={weatherData} updateWeather={updateWeather} />
      </WrapperContent>
    </Wrapper>
  );
};

export default Home;
