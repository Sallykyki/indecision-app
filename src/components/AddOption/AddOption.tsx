import React from "react";

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
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add option</button>
        </form>
      </div>
    );
  }
}
