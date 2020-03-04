import React, { FunctionComponent } from "react";
import Option from "../Option/Option";

interface IProps {
  options: string[];
  handleDeleteOptions: () => void;
  handleDeleteOption: (text: string) => void;
}

const Options: FunctionComponent<IProps> = ({
  options,
  handleDeleteOption,
  handleDeleteOptions
}) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="button button--link" onClick={handleDeleteOptions}>
        Remove all
      </button>
    </div>
    {options.length === 0 && (
      <p className="widget__message">Please addd an option to start!</p>
    )}
    {options.map((option, index) => (
      <Option
        key={option}
        optionText={option}
        count={index + 1}
        handleDeleteOption={handleDeleteOption}
      />
    ))}
  </div>
);
export default Options;
