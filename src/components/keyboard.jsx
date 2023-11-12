import React, { useState } from "react";
import Key from "./key.jsx";
import {
  enLetters,
  enUperCaseLetters,
  numbers,
  heLetters,
  symbols,
} from "../keyboardData.jsx";

function Keyboard(props) {
  const [keyboardArr, setKeyboardArr] = useState(
    enLetters.map((char, key) => (
      <Key content={char.content} key={key} handleKeyPress={handleKeyPress} />
    ))
  );

  //!!! needs to be changed
  function handleKeyPress(char) {
    //add char to textarea array
    //maybe call a function it get from App that modifies the textarea?
  }
  ///^^^

  function changeKeyboardContent(type) {
    switch (type) {
      case 0:
        setKeyboardArr(
          enLetters.map((char, key) => (
            <Key
              content={char.content}
              key={key}
              handleKeyPress={handleKeyPress}
            />
          ))
        );
        break;
      case 1:
        setKeyboardArr(
          enUperCaseLetters.map((char, key) => (
            <Key
              content={char.content}
              key={key}
              handleKeyPress={handleKeyPress}
            />
          ))
        );
        break;
      case 2:
        setKeyboardArr(
          numbers.map((char, key) => (
            <Key
              content={char.content}
              key={key}
              handleKeyPress={handleKeyPress}
            />
          ))
        );
        break;
      case 3:
        setKeyboardArr(
          heLetters.map((char, key) => (
            <Key
              content={char.content}
              key={key}
              handleKeyPress={handleKeyPress}
            />
          ))
        );
        break;
      case 4:
        setKeyboardArr(
          symbols.map((char, key) => (
            <Key
              content={char.content}
              key={key}
              handleKeyPress={handleKeyPress}
            />
          ))
        );
        break;
      default:
        setKeyboardArr([]);
    }
  }
  console.log(keyboardArr);
  return (
    <div>
      <div className="keyboard-container">
        {keyboardArr}
        <Key content=" "/>
      </div>
      <div>
        <button onClick={()=>{changeKeyboardContent(0)}}>lower case</button>
        <button onClick={()=>{changeKeyboardContent(1)}}>UPPER CASE</button>
        <button onClick={()=>{changeKeyboardContent(2)}}>עברית</button>
        <button onClick={()=>{changeKeyboardContent(3)}}>symbols</button>
        <button onClick={()=>{changeKeyboardContent(4)}}>numbers</button>
      </div>
    </div>
  );
}

export default Keyboard;
