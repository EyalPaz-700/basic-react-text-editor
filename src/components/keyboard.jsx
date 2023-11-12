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
  const layouts = {
    English: enLetters,
    "Upper Case": enUperCaseLetters,
    Numbers: numbers,
    עברית: heLetters,
    Symbols: symbols,
  };

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
      </div>
      <div className="specialKeys">
        <Key content="Space" handleKeyPress={addCharToText} />
        <Key content="New Line" handleKeyPress={addCharToText} />
      </div>

      <div className="keyboard-buttons">
        {Object.entries(layouts).map(([layoutName, layout]) => {
          return (
            <button
              key={layoutName}
              onClick={() => {
                setKeyboardArr(layout);
              }}
            >
              {layoutName}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Keyboard;
