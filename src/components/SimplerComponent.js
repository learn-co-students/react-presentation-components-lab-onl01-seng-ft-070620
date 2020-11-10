import React from "react";

const SimplerComponent = (props) => (
  <div onClick={props.handleClick("Clicked!")}>I am just happy</div>
);

export default SimplerComponent;
