import React, { FC, PropsWithChildren } from 'react';
import { FontSize } from '~/theme';
import { Wrapper } from './style';

type Props = {
  variant?: keyof FontSize;
};

const Typography: FC<PropsWithChildren<Props>> = ({
  variant = 'body',
  children,
  ...rest
}) => {
  return (
    <Wrapper variant={variant} {...rest}>
      {children}
    </Wrapper>
  );
};

export default Typography;
