import React from "react";
import Theme from "../../styles/theme";
import { AddOptionInput, AddOptionForm } from "./AddOption.styles";
import Button from "../Button";

export default {
  title: "Add option form"
};

export const input = () => (
  <Theme>
    <AddOptionInput placeholder="Add a todo"></AddOptionInput>
  </Theme>
);

export const form = () => (
  <Theme>
    <AddOptionForm>
      <AddOptionInput placeholder="Add a todo" />
      <Button>Add option</Button>
    </AddOptionForm>
  </Theme>
);
