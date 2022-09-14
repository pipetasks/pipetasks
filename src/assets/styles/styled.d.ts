import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;

    colors: {
      background: string;
      textNumber: string;
      neutral: string;
    };
  }
}
