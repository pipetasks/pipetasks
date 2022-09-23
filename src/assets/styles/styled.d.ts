import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;

    colors: {
      background: string;
      title: string;
      subtitle: string;
      notifications: {
        background: string;
        color: string;
      };
      input: {
        background: string;
        border: string;
        color: string;
      };
      tasks: {
        background: string;
        color: string;
      };
      divider: string;
    };
  }
}
