import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      offBlack: string;
      offWhite: string;
      darkBlue: string;
      blue: string;
      lightBlue: string;
      purple: string;
      white: string;
    };

    spacing: {
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
      desktopBreakpoint: string;
    };
  }
}
