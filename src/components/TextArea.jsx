import React, { useState } from "react";
import "../css/text-area.css";
import Char from "./Char";
export default function TextArea({ chars }) {
  return (
    <div className="text-area">
      {chars.map((char) => {
        <Char
          content={char.content}
          font={char.font}
          fontSize={char.fontSize}
          color={char.color}
        />;
      })}
    </div>
  );
}
