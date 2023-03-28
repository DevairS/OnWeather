import {
  CommonActions,
  NavigationAction,
  NavigationContainerRef,
} from '@react-navigation/native';
import { Routes } from '../enum';
import { NavigationParams } from '../types/navigation';

let navigator: NavigationContainerRef<NavigationParams>;

export function setTopLevelNavigator(
  navigatorRef: NavigationContainerRef<NavigationParams>,
): void {
  navigator = navigatorRef;
}
export function dispatch(fn: NavigationAction): void {
  navigator.dispatch(fn);
}

export const navigate = (name: Routes, params?: NavigationParams) =>
  navigator.dispatch(CommonActions.navigate({ name, params }));

export const goBack = () => navigator.dispatch(CommonActions.goBack());
