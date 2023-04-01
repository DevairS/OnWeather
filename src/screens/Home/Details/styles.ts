import styled from 'styled-components/native';
import { Typography } from '~/components';

export const Wrapper = styled.View`
  margin-top: 24px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.mediumRadius}px;
  height: 160px;
  justify-content: space-between;
`;

export const WrapperRowDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperDetailLeft = styled.View`
  width: 70%;
`;

export const WrapperDetailRight = styled.View`
  width: 30%;
`;

export const Text = styled(Typography)``;
