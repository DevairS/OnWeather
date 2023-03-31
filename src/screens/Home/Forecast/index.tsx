import React, { ElementType, FC } from 'react';
import { FormattedMessage, FormattedTime } from 'react-intl';
import { ListRenderItem } from 'react-native';
import { Temperature } from '~/components';
import { UnitsEnum } from '~/enum';
import { Forecast as ForecastType } from '~/models';
import {
  Card,
  CardBottom,
  CardTop,
  TextCard,
  DetailWheather,
  IconWeather,
  List,
  WrapperCard,
} from './styles';

type Props = {
  forecastData: ForecastType[];
  activeUnit: UnitsEnum;
};

const Forecast: FC<Props> = ({ forecastData, activeUnit }) => {
  const renderItem: ListRenderItem<ForecastType> = ({ item }) => (
    <Card>
      <CardTop>
        <TextCard>
          <FormattedTime value={item.date} />
        </TextCard>
        <IconWeather icon={item.forecast.icon} />
        <Temperature unit={activeUnit} temp={item.temp} />
      </CardTop>
      <CardBottom>
        <DetailWheather>{item.forecast.description}</DetailWheather>
      </CardBottom>
    </Card>
  );

  return (
    <WrapperCard>
      <TextCard>
        <FormattedMessage
          id="Home.Forecast.Title"
          defaultMessage="Previsão para os proximos 5 dias"
        />
      </TextCard>
      <List<ElementType>
        data={forecastData}
        keyExtractor={(item: ForecastType) => item.date.toString()}
        renderItem={renderItem}
      />
    </WrapperCard>
  );
};

export default Forecast;
