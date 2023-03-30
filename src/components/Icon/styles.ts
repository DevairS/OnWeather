import styled from 'styled-components/native';

type IconProps = {
  width?: number;
  height?: number;
};

export const Icon = styled.Image<IconProps>`
  width: ${({ width }) => width || 64}px;
  height: ${({ height }) => height || 64}px;
`;
