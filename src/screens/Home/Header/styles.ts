import styled from 'styled-components/native';
import { Typography } from '~/components';

export const Wrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Localization = styled(Typography).attrs({ variant: 'largeTitle' })`
  font-weight: 500;
`;

export const TextDate = styled(Typography).attrs({ variant: 'callout' })``;
