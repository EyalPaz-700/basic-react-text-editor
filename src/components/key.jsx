import React from "react";

function Key(props) {
  const keyStyle = {
    border: "1px solid black",
    margin: "5px",
    padding: "5px",
    display: "inline-block",
    cursor: "pointer",
  };
  if (props.content === " ") {
    keyStyle.padding = "10px";
    keyStyle.margin = "auto 5px";
    keyStyle.width = "9em";
  }
  return (
    <div
      onClick={(e) => {
        props.handleKeyPress(e.target.textContent);
      }}
      style={keyStyle}
    >
      {props.content}
    </div>
  );
}

export default Key;
