import { colors, Colors } from './colors';
import { radius, Radius } from './radius';
import { fontSize, FontSize } from './fontSize';

export type { FontSize };

export const theme = {
  colors,
  radius,
  fontSize,
};

export type Theme = {
  colors: Colors;
  radius: Radius;
  fontSize: FontSize;
};
