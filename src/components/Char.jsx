import React from "react";

export default function Char({ color, content, font, fontSize }) {
  const charStyle = {
    color: color,
    fontSize: fontSize + "px",
    fontFamily: font,
  };
  return <span style={charStyle}>{content}</span>;
}
