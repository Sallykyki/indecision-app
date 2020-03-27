import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";
import Theme from "../../styles/theme";

export default {
  component: Button,
  title: "Button"
};

export const normal = () => (
  <Theme>
    <Button>Hello Button</Button>
  </Theme>
);

export const link = () => (
  <Theme>
    <Button link={true}>Hello Button</Button>
  </Theme>
);

export const big = () => (
  <Theme>
    <Button big={true}>Hello Button</Button>
  </Theme>
);
