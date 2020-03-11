import React, { FunctionComponent } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    offBlack: "#20222b",
    offWhite: "#a5afd7",
    darkBlue: "#333745",
    blue: "#3c4251",
    lightBlue: "#464b5e",
    purple: "#8357c5",
    white: "#fff"
  },
  spacing: {
    small: "1.2rem",
    medium: "1.6rem",
    large: "3.2rem",
    extraLarge: "4.8rem",
    desktopBreakpoint: "45rem"
  }
};

const Theme: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
