import React from "react";

export default function Char({ color, content, font, fontSize }) {
  const charStyle = {
    color: color,
    fontFamily: font,
    fontSize: fontSize,
  };
  return <span style={charStyle}>{content}</span>;
}
