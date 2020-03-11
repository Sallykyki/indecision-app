import React from "react";
import Button from "../Button";

interface IProps {
  handlePick: () => void;
  hasOptions: boolean;
}

const Action: React.FunctionComponent<IProps> = ({
  handlePick,
  hasOptions
}) => (
  <div>
    <Button big={true} onClick={handlePick} disabled={!hasOptions}>
      What should I do now?
    </Button>
  </div>
);
export default Action;
