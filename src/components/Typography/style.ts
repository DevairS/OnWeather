import styled from 'styled-components/native';
import { FontSize } from '~/theme';

type Props = {
  variant: keyof FontSize;
};
export const Wrapper = styled.Text<Props>`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme, variant }) => theme.fontSize[variant]}px;
`;
