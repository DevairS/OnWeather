import React, { FC } from 'react';
import { UnitsEnum } from '~/enum';
import { Visible } from '~/components';
import { Container, Unit, Temp } from './styles';
import { FontSize } from '~/theme';

type Props = {
  unit: string;
  temp: number;
  variant?: keyof FontSize;
};

const Temperature: FC<Props> = ({ unit, temp, variant: size }) => {
  return (
    <Container>
      <Temp variant={size}>{Math.round(temp)}</Temp>
      <Visible when={unit !== UnitsEnum.kelvin}>
        <Unit variant={size}>°</Unit>
      </Visible>
    </Container>
  );
};

export default Temperature;
