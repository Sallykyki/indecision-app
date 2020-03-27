import React from "react";
import { HeaderContainer } from "./Header.styles";
import Theme from "../../styles/theme";
import Header from "./Header";

export default {
  component: Header,
  title: "Header"
};

export const normal = () => (
  <Theme>
    <Header title="This is title" subtitle="This is subtitle" />
  </Theme>
);
