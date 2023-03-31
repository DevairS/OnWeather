import React, { FC, PropsWithChildren } from 'react';
import Visible from '../Visible';
import { Button, Text } from './styles';

type Props = {
  onPress?: () => void;
  text?: string;
};

const ButtonComponent: FC<PropsWithChildren<Props>> = ({
  onPress,
  text,
  children,
}) => {
  return (
    <Button onPress={onPress}>
      <Visible when={!!text}>
        <Text>{text}</Text>
      </Visible>
      {children}
    </Button>
  );
};

export default ButtonComponent;
