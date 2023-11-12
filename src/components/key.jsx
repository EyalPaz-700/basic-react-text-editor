import React from "react";

function Key(props) {
  return (
    <div
      className={"key " + (props.className || "")}
      onClick={(e) => {
        props.handleKeyPress(e.target.textContent);
      }}
    >
      {props.content}
    </div>
  );
}

export default Key;
