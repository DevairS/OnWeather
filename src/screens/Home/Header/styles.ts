import styled from 'styled-components/native';
import { Icons } from '~/assets';
import { Icon, Typography } from '~/components';

type IconUpdateProps = {
  icon: keyof Icons;
};

export const Wrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Localization = styled(Typography).attrs({ variant: 'largeTitle' })`
  font-weight: 500;
`;

export const TextDate = styled(Typography).attrs({ variant: 'callout' })``;

export const IconUpdate = styled(Icon).attrs<IconUpdateProps>(({ icon }) => ({
  icon,
  width: 20,
  height: 20,
}))``;
