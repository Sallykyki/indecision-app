import React, { FunctionComponent } from "react";
import Option from "../Option/Option";

import { OptionsContainer, WidgetHeader } from "./Options.styles";
import { Paragraph, Heading3 } from "../Text";
import Button from "../Button";
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
  <OptionsContainer>
    <WidgetHeader>
      <Heading3>Your Options</Heading3>
      <Button link={true} onClick={handleDeleteOptions}>
        Remove all
      </Button>
    </WidgetHeader>
    {options.length === 0 && (
      <Paragraph isWidgetMessage={true}>
        Please addd an option to start!
      </Paragraph>
    )}
    {options.map((option, index) => (
      <Option
        key={option}
        optionText={option}
        count={index + 1}
        handleDeleteOption={handleDeleteOption}
      />
    ))}
  </OptionsContainer>
);
export default Options;
