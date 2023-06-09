import { Routes } from '~/enum';

export type NavigationProps = {
  [Routes.START]: undefined;
  [Routes.HOME]: undefined;
  [Routes.SETTINGS]: undefined;
  [Routes.TABS]: undefined;
};

export type NavigationParams = {
  [key: string]: any;
};
