import React, { FC } from 'react';
import { FormattedMessage, FormattedTime } from 'react-intl';
import { View } from 'react-native';
import { Temperature } from '~/components';
import { UnitsEnum } from '~/enum';
import { Weather } from '~/models';
import {
  Text,
  Wrapper,
  WrapperDetailLeft,
  WrapperDetailRight,
  WrapperRowDetails,
} from './styles';

type Props = {
  weatherData: Weather;
  activeUnit: UnitsEnum;
};

const Details: FC<Props> = ({ weatherData, activeUnit }) => {
  return (
    <Wrapper>
      <WrapperRowDetails>
        <WrapperDetailLeft>
          <Text>
            <FormattedMessage
              id="Home.Details.sunrise"
              defaultMessage="Nascer do Sol"
            />
          </Text>
          <Text>
            <FormattedTime value={weatherData.sunrise} />
          </Text>
        </WrapperDetailLeft>
        <WrapperDetailRight>
          <View>
            <Text>
              <FormattedMessage
                id="Home.Details.sunset"
                defaultMessage="Pôr do Sol"
              />
            </Text>
            <Text>
              <FormattedTime value={weatherData.sunset} />
            </Text>
          </View>
        </WrapperDetailRight>
      </WrapperRowDetails>
      <WrapperRowDetails>
        <WrapperDetailLeft>
          <Text>
            <FormattedMessage
              id="Home.Details.feelsLike"
              defaultMessage="Sensação Térmica"
            />
          </Text>
          <Text>
            <Temperature temp={weatherData.feelsLike} unit={activeUnit} />
          </Text>
        </WrapperDetailLeft>
        <WrapperDetailRight>
          <View>
            <Text>
              <FormattedMessage
                id="Home.Details.humidity"
                defaultMessage="Umidade"
              />
            </Text>
            <Text>{`${weatherData.humidity}%`}</Text>
          </View>
        </WrapperDetailRight>
      </WrapperRowDetails>
    </Wrapper>
  );
};

export default Details;
