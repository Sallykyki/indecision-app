import React from "react";
import { AddOptionForm, AddOptionInput } from "./AddOption.styles";

import Button from "../Button";
import { Paragraph } from "../Text";

interface IProps {
  handleAddOption: (option: string) => string;
}

interface IState {
  error: string;
}

export default class AddOption extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = { error: undefined };
  }
  handleAddOption(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e.currentTarget.getElementsByTagName("input")[0]);
    const option = e.currentTarget
      .getElementsByTagName("input")[0]
      .value.trim();

    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));

    if (!error) {
      e.currentTarget.getElementsByTagName("input")[0].value = "";
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.state.error && (
          <Paragraph isError={true}>{this.state.error}</Paragraph>
        )}
        <AddOptionForm onSubmit={this.handleAddOption}>
          <AddOptionInput type="text" name="option" placeholder="Add a todo" />
          <Button>Add option</Button>
        </AddOptionForm>
      </React.Fragment>
    );
  }
}
