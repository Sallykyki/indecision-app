import React from "react";
import { Paragraph, Heading1, Heading2 } from "../Text";
import Theme from "../../styles/theme";

export default {
  component: Text,
  title: "Text"
};

export const heading1 = () => (
  <Theme>
    <Heading1>Heading 1</Heading1>
  </Theme>
);

export const heading2 = () => (
  <Theme>
    <Heading2>Heading 2</Heading2>
  </Theme>
);

export const paragraph = () => (
  <Theme>
    <Paragraph>This is a normal paragraph.</Paragraph>
  </Theme>
);

export const widgetMessage = () => (
  <Theme>
    <Paragraph isWidgetMessage={true}> This is widget message.</Paragraph>
  </Theme>
);

export const optionText = () => (
  <Theme>
    <Paragraph isOptionText={true}> This is option text.</Paragraph>
  </Theme>
);

export const errorText = () => (
  <Theme>
    <Paragraph isError={true}> This is error text.</Paragraph>
  </Theme>
);
