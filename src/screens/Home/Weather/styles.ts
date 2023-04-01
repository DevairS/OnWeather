import { Icon, Typography } from '~/components';
import styled from 'styled-components/native';
import { Icons } from '~/assets';

type IconWeatherProps = {
  icon: keyof Icons;
};

export const CardWeather = styled.View`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 8px;
  margin-top: 10px;
  border-radius: ${({ theme }) => theme.radius.mediumRadius}px;
  height: 140px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TempWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TempTitle = styled(Typography)``;

export const IconWeather = styled(Icon).attrs<IconWeatherProps>(({ icon }) => ({
  icon,
  width: 100,
  height: 100,
}))``;
