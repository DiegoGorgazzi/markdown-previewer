import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Markdown from "./components/Markdown/Markdown";

class App extends Component {
  state = {
    input:"TEST TO CHECK FOR TWO-WAY BINDING"
  }

//handler to allow user input
inputChangedHandler = (event) => {
  this.setState ({
    input: event.target.value
  });
}

  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>

        <Markdown
        userInput={this.state.input}
        changed={this.inputChangedHandler}
        /*I'm setting preview to this.state.input for now but
          I'll have to change it to the marked down version*/
        preview={this.state.input}
        />

      </div>

    );
  }
}

export default App;
