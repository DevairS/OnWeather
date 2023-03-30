import React, { FC, PropsWithChildren } from 'react';
import { Button, Text } from './styles';

type Props = { onPress?: () => void; children: any };

const ButtonComponent: FC<PropsWithChildren<Props>> = ({
  onPress,
  children,
}) => {
  return (
    <Button onPress={onPress}>
      <Text>{children}</Text>
    </Button>
  );
};

export default ButtonComponent;
