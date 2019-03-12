import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Markdown from "./components/Markdown/Markdown";

class App extends Component {
  state = {
    persons: [

      {name:""},

    ]
  }

nameChangedHandler = (event) => {
  this.setState ({
    persons: [
      {name: event.target.value},
    ],
  });

}

  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>

        <Markdown
        name={this.state.persons[0].name}
        changed={this.nameChangedHandler}
        />

      </div>

    );
  }
}

export default App;
