import React from "react";

const mood = "happy";

const SimplerComponent = (props) => (
  <div onClick={props.handleClick}>I am just {mood}</div>
);

export default SimplerComponent;
