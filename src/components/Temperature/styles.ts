import styled from 'styled-components/native';
import Typography from '../Typography';
import { FontSize } from '~/theme';

type Props = {
  variant?: keyof FontSize;
};

export const Container = styled.View`
  flex-direction: row;
  position: relative;
`;

export const Temp = styled(Typography).attrs(({ variant }) => ({
  variant,
}))<Props>``;

export const Unit = styled(Typography).attrs(({ variant }) => ({
  variant,
}))<Props>`
  position: absolute;
`;
