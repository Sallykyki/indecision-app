import React from "react";
import {
  AddOptionForm,
  AddOptionInput,
  AddOptionError
} from "./AddOption.styles";

import Button from "../Button";

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
          <AddOptionError className="add-option-error">
            {this.state.error}
          </AddOptionError>
        )}
        <AddOptionForm onSubmit={this.handleAddOption}>
          <AddOptionInput type="text" name="option" />
          <Button>Add option</Button>
        </AddOptionForm>
      </React.Fragment>
    );
  }
}
