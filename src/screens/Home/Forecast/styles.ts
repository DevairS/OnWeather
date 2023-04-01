import styled from 'styled-components/native';
import { Icons } from '~/assets';
import { Icon, Typography } from '~/components';

type IconWeatherProps = {
  icon: keyof Icons;
};

export const WrapperCard = styled.View`
  margin-top: 24px;
`;

export const List = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Card = styled.View`
  width: 100px;
  height: 140px;
  border-radius: ${({ theme }) => theme.radius.mediumRadius}px;
  background-color: ${({ theme }) => theme.colors.surface};
  align-items: center;
  margin-right: 10px;
  justify-content: space-between;
  padding: 4px;
`;

export const CardTop = styled.View`
  justify-content: flex-start;
  align-items: center;
`;

export const TextCard = styled(Typography)``;

export const CardBottom = styled.View``;

export const DetailWheather = styled(Typography).attrs({ variant: 'subhead' })`
  text-align: center;
`;

export const WrapperDate = styled.View`
  flex-direction: row;
`;

export const IconWeather = styled(Icon).attrs<IconWeatherProps>(({ icon }) => ({
  icon,
}))``;
