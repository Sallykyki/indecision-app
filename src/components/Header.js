import React from "react";

//stateless functional component
const Header = props => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);
Header.defaultProps = {
  title: "Indecision"
};
// class Header extends React.Component {
//   render() {
//     //must-have method in react component
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

export default Header;
