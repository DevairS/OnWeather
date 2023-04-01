import React, { FC, PropsWithChildren } from 'react';
import Visible from '../Visible';
import { Button, Text } from './styles';

type Props = {
  onPress?: () => void;
  text?: string;
  active?: boolean;
};

const ButtonComponent: FC<PropsWithChildren<Props>> = ({
  onPress,
  text,
  active = true,
  children,
  ...rest
}) => {
  return (
    <Button onPress={onPress} active={active} {...rest}>
      <Visible when={!!text}>
        <Text active={active}>{text}</Text>
      </Visible>
      {children}
    </Button>
  );
};

export default ButtonComponent;
