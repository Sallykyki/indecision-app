import React from "react";
import { Wrapper } from "./Option.styles";
import Button from "../Button";
import { Paragraph } from "../Text";

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
    <Paragraph isOptionText={true}>
      {count}. {optionText}
    </Paragraph>
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
