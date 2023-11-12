import React from "react";

function Key({ content, className, handleKeyPress, color, font, fontSize }) {
  return (
    <div
      className={"key " + (className || "")}
      onClick={(e) => {
        handleKeyPress(e.target.textContent, color, fontSize, font);
      }}
    >
      {content}
    </div>
  );
}

export default Key;
