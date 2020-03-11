import React from "react";
import AddOption from "./components/AddOption";
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options";
import OptionModal from "./components/OptionModal";
import Container from "./components/Container";

import Theme from "./styles/theme";
import GlobalStyle from "./styles/base";

interface IProps {}

interface IState {
  options: string[];
  selectedOption: string;
}

export default class App extends React.Component<IProps, IState> {
  state: IState = {
    options: [],
    selectedOption: undefined
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = (optionToRemove: string) => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  };
  handleAddOption = (option: string) => {
    if (!option) {
      return "Enter a valid option.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists.";
    }
    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {}
  }
  componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  render() {
    const subtitle: string = "Put your life in the hands of a computer";
    return (
      <Theme>
        <GlobalStyle />
        <Header subtitle={subtitle} />
        <Container>
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption} />
        </Container>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </Theme>
    );
  }
}
