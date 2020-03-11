import React from "react";
import { HeaderContainer, HeaderTitle, HeaderSubtitle } from "./Header.styles";
import Container from "../Container";

interface IProps {
  title?: string;
  subtitle: string;
}
const Header: React.FunctionComponent<IProps> = ({ title, subtitle }) => (
  <HeaderContainer>
    <Container>
      <HeaderTitle>{title}</HeaderTitle>
      {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>}
    </Container>
  </HeaderContainer>
);

Header.defaultProps = {
  title: "Indecision"
};

export default Header;
