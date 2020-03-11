import React, { FunctionComponent } from "react";
import Option from "../Option/Option";

import { OptionsContainer, WidgetTitle, WidgetHeader } from "./Options.styles";
import Paragraph from "../Paragraph";
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
      <WidgetTitle>Your Options</WidgetTitle>
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
