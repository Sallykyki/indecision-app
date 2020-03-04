import React from "react";

interface IProps {
  handlePick: () => void;
  hasOptions: boolean;
}

const Action: React.FunctionComponent<IProps> = ({
  handlePick,
  hasOptions
}) => (
  <div>
    <button className="big-button" onClick={handlePick} disabled={!hasOptions}>
      What should I do now?
    </button>
  </div>
);
export default Action;
