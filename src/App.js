import React, { Component } from 'react';
import './App.css';
import Markdown from "./components/Markdown/Markdown";
import marked from 'marked';

class App extends Component {
  state = {
    input:
`
# A header (H1 size)

## A sub header (H2 size)

A link: [GitHub Pages](https://pages.github.com/)

Inline code: \` state={input:""} \`

This is a code block:
\`\`\`
inputChangedHandler = (event) => {
  this.setState ({
    input: event.target.value
    });
  }
\`\`\`

A List:
- Eggs
- Milk
- Nutella

A blockquote:
> "In everything give thanks."

__bolded text too__

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

markedDownHandler = () => {
  const toBeMarked=this.state.input;
  marked.setOptions({
    gfm: true,
    breaks: true
  });

  return marked(toBeMarked);

}

  render() {

    return (
      <div className="App">
        <h1>Markdown Previewer</h1>
        <h3>a Reactive Responsive App</h3>
          <p className="appAuthor">by <a href="https://github.com/DiegoGorgazzi">me</a></p>

      <Markdown
        userInput={this.state.input}
        changed={this.inputChangedHandler}
        preview={this.markedDownHandler()}

        />

      </div>

    );
  }
}

export default App;
