import React from "react";
import { HeaderContainer } from "./Header.styles";
import { Heading1, Heading2 } from "../Text";
import Container from "../Container";

interface IProps {
  title?: string;
  subtitle: string;
}
const Header: React.FunctionComponent<IProps> = ({ title, subtitle }) => (
  <HeaderContainer>
    <Container>
      <Heading1>{title}</Heading1>
      {subtitle && <Heading2>{subtitle}</Heading2>}
    </Container>
  </HeaderContainer>
);

Header.defaultProps = {
  title: "Indecision"
};

export default Header;
