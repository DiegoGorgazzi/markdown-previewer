import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Markdown from "./components/Markdown/Markdown";

class App extends Component {
  state = {
    input:
    `
  # A header (H1 size)

  ## A sub header (H2 size)

  A link: [GitHub Pages](https://pages.github.com/)

  Inline code: \` state={input:""} \`

  \`\`\`
  //This is a code block:
  inputChangedHandler = (event) => {
    this.setState ({
      input: event.target.value
    });
  }
  \`\`\`

  A List:
  - eggs
  - milk
  - nutella

  A blockquote:
  > In everything give thanks.

  **bolded text**.

  An image:
  ![A library](https://bit.ly/2T36yNG)
  `
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
