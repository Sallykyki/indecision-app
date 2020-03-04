import React from "react";

interface IProps {
  title?: string;
  subtitle: string;
}
const Header: React.FunctionComponent<IProps> = ({ title, subtitle }) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{title}</h1>
      {subtitle && <h2 className="header__subtitle">{subtitle}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
  title: "Indecision"
};

export default Header;
