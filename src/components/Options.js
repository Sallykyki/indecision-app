import React from "react";
import Option from "./Option";

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//         {// this.props.options.map(option => <p key={option}>{option}</p>)
//         this.props.options.map(option => (
//           <Option key={option} optionText={option} />
//         ))}
//       </div>
//     );
//   }
// }

//stateless functional component
const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove all
      </button>
    </div>
    {props.options.length === 0 && (
      <p className="widget__message">Please addd an option to start!</p>
    )}
    {// this.props.options.map(option => <p key={option}>{option}</p>)
    props.options.map((option, index) => (
      <Option
        key={option}
        optionText={option}
        count={index + 1}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);
export default Options;
