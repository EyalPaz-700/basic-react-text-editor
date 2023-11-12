import React from "react";

function Key({ content, handleKeyPress, color, font, fontSize, className }) {
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
