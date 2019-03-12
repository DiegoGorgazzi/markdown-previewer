import React from "react";

const markdown = (props) => {
    return (
      <div>
        <p>INPUT {props.name}</p>
          <input type="text" onChange={props.changed}/>
      </div>
    )
};

export default markdown;
