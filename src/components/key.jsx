import React from "react";

function Key({ content, handleKeyPress, color, font, fontSize }) {
  const keyStyle = {
    border: "1px solid black",
    margin: "5px",
    padding: "5px",
    display: "inline-block",
    cursor: "pointer",
  };
  if (content === " ") {
    keyStyle.padding = "10px";
    keyStyle.margin = "auto 5px";
    keyStyle.width = "9em";
  }
  return (
    <div
      onClick={(e) => {
        handleKeyPress(e.target.textContent, color, fontSize, font);
      }}
      style={keyStyle}
    >
      {content}
    </div>
  );
}

export default Key;
