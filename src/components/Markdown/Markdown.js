import React from "react";

const markdown = (props) => {

  let htmlPropsPreview= {__html: props.preview};

    return (
      <div>
          <h3>INPUT</h3>
          <textarea
            id="editor"
            type="text"
            onChange={props.changed}
            value={props.userInput}
            />

          <h3>OUTPUT </h3>

          <div id= "preview"
            dangerouslySetInnerHTML={htmlPropsPreview} />

      </div>
    )
};

export default markdown;
