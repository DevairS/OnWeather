import styled from 'styled-components/native';
import { Typography } from '~/components';

export const Wrapper = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextLoading = styled(Typography).attrs({
  variant: 'body',
})``;
