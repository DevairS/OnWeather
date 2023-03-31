import styled from 'styled-components/native';
import Typography from '../Typography';

export const Button = styled.TouchableOpacity`
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.active};
  flex-direction: row;
  border-radius: ${({ theme }) => theme.radius.smallRadius}px;
`;

export const Text = styled(Typography).attrs({ variant: 'body' })`
  color: ${({ theme }) => theme.colors.buttonText};
`;
