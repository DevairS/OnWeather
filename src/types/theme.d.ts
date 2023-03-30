import 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    surface: string;
    primary: string;
    error: string;
    active: string;
  }
}
