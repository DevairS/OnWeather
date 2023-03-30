import { Icon, Typography } from '~/components';
import styled from 'styled-components/native';

type IconWeatherProps = {
  icon: string;
};

export const CardWeather = styled.View`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 8px;
  margin-top: 10px;
  border-radius: 8px;
  height: 120px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TempWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TempTitle = styled(Typography).attrs({ variant: 'body' })``;

export const IconWeather = styled(Icon).attrs<IconWeatherProps>(({ icon }) => ({
  icon,
  width: 100,
  height: 100,
}))``;
