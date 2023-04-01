import styled from 'styled-components/native';
import Typography from '../Typography';

type Props = {
  active: boolean;
};

export const Button = styled.TouchableOpacity<Props>`
  padding: 4px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.active : theme.colors.surface};
  flex-direction: row;
  border-radius: ${({ theme }) => theme.radius.smallRadius}px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled(Typography).attrs({ variant: 'body' })<Props>`
  color: ${({ theme, active }) =>
    active ? theme.colors.buttonText : theme.colors.primary};
`;
