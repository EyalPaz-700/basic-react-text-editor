import React, { useState } from "react";
import Key from "./key.jsx";
import {
  enLetters,
  enUperCaseLetters,
  numbers,
  heLetters,
  symbols,
} from "../keyboardData.jsx";

function Keyboard({ addCharToText }) {
  const [keyboardArr, setKeyboardArr] = useState(enLetters);

  console.log("render");
  function changeKeyboardContent(type) {
    switch (type) {
      case 0:
        setKeyboardArr(enLetters);
        break;
      case 1:
        setKeyboardArr(enUperCaseLetters);
        break;
      case 2:
        setKeyboardArr(numbers);
        break;
      case 3:
        setKeyboardArr(heLetters);
        break;
      case 4:
        setKeyboardArr(symbols);
        break;
      default:
        setKeyboardArr([]);
    }
  }
  console.log(keyboardArr);
  return (
    <div>
      <div className="keyboard-container">
        {keyboardArr.map((char, key) => (
          <Key
            content={char.content}
            key={key}
            handleKeyPress={addCharToText}
          />
        ))}
        <Key content=" " />
      </div>
      <div>
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
    </div>
  );
}

export default Keyboard;
