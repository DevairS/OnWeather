import React, { FC, ReactElement, PropsWithChildren } from 'react';
import { View } from 'react-native';

type Props = {
  placeholder?: ReactElement;
  when: boolean;
};

const Visible: FC<PropsWithChildren<Props>> = ({
  when,
  placeholder,
  children,
}) => {
  return <View>{when ? children : placeholder}</View>;
};

export default Visible;
