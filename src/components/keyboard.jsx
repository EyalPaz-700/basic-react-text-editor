import React, { useState } from "react";
import Key from "./key.jsx";
import keyboardData from "../keyboardData.jsx";
console.log("keyboardData: ", keyboardData);

function Keyboard({ addCharToText }) {
  const [keyboardArr, setKeyboardArr] = useState(enLetters);

  console.log("render");
  function changeKeyboardContent(type) {
    setKeyboardArr(
      keyboardData[type].map((char, key) => (
        <Key content={char.content} key={key} handleKeyPress={handleKeyPress} />
      ))
    );
  }
  return (
    <div>
      <div className="buttons-container">
        <button
          onClick={() => {
            changeKeyboardContent(0);
          }}
        >
          lower case
        </button>
        <button
          onClick={() => {
            changeKeyboardContent(1);
          }}
        >
          UPPER CASE
        </button>
        <button
          onClick={() => {
            changeKeyboardContent(2);
          }}
        >
          numbers
        </button>
        <button
          onClick={() => {
            changeKeyboardContent(3);
          }}
        >
          עברית
        </button>
        <button
          onClick={() => {
            changeKeyboardContent(4);
          }}
        >
          symbols
        </button>
      </div>
      <div className="keyboard-container">
        {keyboardArr}
        <Key className="space" content=" " />
      </div>
    </div>
  );
}

export default Keyboard;
