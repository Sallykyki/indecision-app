import React from "react";
import Theme from "../../styles/theme";
import { Wrapper } from "./Option.styles";
import { Paragraph } from "../Text";
import Button from "../Button";

export default {
  title: "Option"
};

export const optionItem = () => (
  <Theme>
    <Wrapper>
      <Paragraph isOptionText={true}>This is an option</Paragraph>
      <Button link={true}>Remove</Button>
    </Wrapper>
  </Theme>
);
