// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const appRoot = document.getElementById("app");

// const render = () => {
//   const visiableTemplate = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey, there are some details you can see.</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(visiableTemplate, appRoot);
// };

// render();

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibility = this.handleVisibility.bind(this);
    this.state = { visibility: false };
  }
  handleVisibility() {
    this.setState(prevState => {
      return { visibility: !this.state.visibility };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>

        {this.state.visibility && (
          <div>
            <p>Hey, there are some details you can see.</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
