import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Markdown from "./components/Markdown/Markdown";

class App extends Component {
  /*state = {
    persons: [
      {name:""},
    ]
  }*/
  state = {
    input:""
  }

nameChangedHandler = (event) => {
  this.setState ({
    input: event.target.value
  });
}

  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>

        <Markdown
        name={this.state.input}
        changed={this.nameChangedHandler}
        />

      </div>

    );
  }
}

export default App;
