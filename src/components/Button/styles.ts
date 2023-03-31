import styled from 'styled-components/native';
import Typography from '../Typography';

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Text = styled(Typography).attrs({ variant: 'body' })``;
