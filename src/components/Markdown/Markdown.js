import React from "react";

const markdown = (props) => {
    return (
      <div>
          <h3>INPUT</h3>
          <textarea type="text" onChange={props.changed}/>
          <h3>OUTPUT </h3>
          <p>{props.preview}</p>
      </div>
    )
};

export default markdown;
