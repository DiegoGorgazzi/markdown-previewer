import React from "react";

const markdown = (props) => {
    return (
      <div>
          <h3>INPUT</h3>
          <textarea
            id="editor"
            type="text"
            onChange={props.changed}
            value={props.input}
          />

          <h3>OUTPUT </h3>
          <p
            id="preview"
            >
            {props.preview}
          </p>
      </div>
    )
};

export default markdown;
