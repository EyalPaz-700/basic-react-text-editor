import React, { useState } from "react";
import Key from "./key.jsx";
import keyboardData from "../keyboardData.jsx";
console.log('keyboardData: ', keyboardData);

function Keyboard(props) {
  const [keyboardArr, setKeyboardArr] = useState(
    keyboardData[0].map((char, key) => (
      <Key content={char.content} key={key} handleKeyPress={handleKeyPress} />
    ))
  );

  //!!! needs to be changed
  function handleKeyPress(char) {
    //add char to textarea array
    //maybe call a function it get from App that modifies the textarea?
  }
  ///^^^

  //to call the function with the desired keyboard type, use one of the following numbers:
  //0 - for enLetters
  //1 - for enUperCaseLetters
  //2 - for numbers
  //3 - for heLetters
  //4 - for symbols
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
