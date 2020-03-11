import React from "react";
import { Wrapper, OptionText } from "./Option.styles";
import Button from "../Button";

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
  <Wrapper>
    <OptionText isWidgetMessage={false}>
      {count}. {optionText}
    </OptionText>
    <Button
      link={true}
      onClick={e => {
        handleDeleteOption(optionText);
      }}
    >
      Remove
    </Button>
  </Wrapper>
);
export default Option;
