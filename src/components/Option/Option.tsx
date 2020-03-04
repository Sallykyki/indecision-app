import React from "react";

interface IProps {
  count: number;
  optionText: string;
  handleDeleteOption: (text: string) => void;
}

const Option: React.FunctionComponent<IProps> = ({
  count,
  optionText,
  handleDeleteOption
}) => (
  <div className="option">
    <p className="option__text">
      {count}. {optionText}
    </p>
    <button
      className="button button--link"
      onClick={e => {
        handleDeleteOption(optionText);
      }}
    >
      Remove
    </button>
  </div>
);
export default Option;
