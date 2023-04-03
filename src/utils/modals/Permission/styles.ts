import styled from 'styled-components/native';
import { Button as ButtonComponent, Typography } from '~/components';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 20px;
`;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
`;

export const Text = styled(Typography)`
  margin-bottom: 20px;
  text-align: center;
`;

export const Button = styled(ButtonComponent)``;
