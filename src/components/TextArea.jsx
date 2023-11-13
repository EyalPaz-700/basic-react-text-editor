import React, { useState } from "react";
import "../css/text-area.css";
import Char from "./Char";
export default function TextArea({ chars }) {
  return (
    <div className="text-area">
      {chars.map((char, index) => {
        if (char.content === "New Line") {
          return <br key={index} />;
        } else if (char.content === "Space") {
          return (
            <Char
              key={index}
              content={" "}
              font={char.font}
              fontSize={char.fontSize}
              color={char.color}
            />
          );
        } else {
          return (
            <Char
              key={index}
              content={char.content}
              font={char.font}
              fontSize={char.fontSize}
              color={char.color}
            />
          );
        }
      })}
      <span className="blinking-char">|</span>
    </div>
  );
}
