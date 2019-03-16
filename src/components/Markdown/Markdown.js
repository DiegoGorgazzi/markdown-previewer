import React from "react";
import "./Markdown.css";

const markdown = (props) => {

  let htmlPropsPreview= {__html: props.preview};

    return (
      <div className="Markdown">

        <div className="input">
          <h3 className="subTitle">INPUT</h3>
          <textarea
            id="editor"
            type="text"
            onChange={props.changed}
            value={props.userInput}
            />
        </div>

        <div className="output">
          <h3 className="subTitle">OUTPUT</h3>

          <div id= "preview"
            dangerouslySetInnerHTML={htmlPropsPreview} />
        </div>

      </div>
    )
};

export default markdown;
