import styled from 'styled-components/native';
import { Typography, Button as ButtonComponent } from '~/components';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const WrapperContent = styled.View`
  padding: 0 12px;
`;

export const TitleScreen = styled(Typography).attrs({ variant: 'largeTitle' })`
  font-weight: 500;
`;

export const SubTitleScreen = styled(Typography).attrs({
  variant: 'subhead',
})`
  margin-bottom: 20px;
`;

export const WrapperConfig = styled.View`
  margin-bottom: 16px;
`;

export const Title = styled(Typography).attrs({ variant: 'callout' })`
  margin-bottom: 2px;
`;

export const WrapperRow = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 2px;
  border-radius: ${({ theme }) => theme.radius.smallRadius}px;
`;

export const Button = styled(ButtonComponent)`
  flex: 1;
`;
