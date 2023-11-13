import { useState } from "react";
import ToolBar from "./components/ToolBar";
import "./App.css";
import Keyboard from "./components/keyboard";
import TextArea from "./components/TextArea";

function App() {
  const [text, setText] = useState([]);
  const [color, setColor] = useState("black");
  const [font, setFont] = useState("Arial");
  const [fontSize, setFontSize] = useState(14);
  const [prevActions, setPrevAction] = useState([]);
  const obj = {
    color: color,
    fontSize: fontSize,
    font: font,
  };
  function undoLastAction() {
    if (prevActions[0]) {
      if (prevActions[prevActions.length - 1] === "addedChar") {
        removeChar();
      } else if (typeof prevActions[prevActions.length - 1] === "object") {
        setText((prev) => {
          return [...prev, prevActions[prevActions.length - 1]];
        })
      }
      setPrevAction(prevActions.slice(0, -1));
    } else {
      alert("cannot undo any further");
    }
  }
  function addCharToText(char) {
    obj.content = char;
    setText((prev) => {
      setPrevAction([...prevActions, "addedChar"]);
      console.log(prevActions);
      return [...prev, obj];
    });
  }
  function removeChar() {
    setPrevAction([...prevActions, text[text.length - 1]]);
    console.log("prevActions: ", prevActions);
    setText(text.length > 0 ? text.slice(0, text.length - 1) : []);
  }

  function resetText() {
    setText([]);
  }

  function changeFontSize(e) {
    setFontSize(e.target.value);
  }

  function changeFont(e) {
    setFont(e.target.value);
  }
  function changeColor(e) {
    setColor(e.target.value);
  }

  return (
    <>
      <ToolBar
        changeColor={changeColor}
        changeFont={changeFont}
        changeFontSize={changeFontSize}
        color={color}
        fontSize={fontSize}
        font={font}
        remove={removeChar}
        undo={undoLastAction}
        reset={resetText}
      />
      <TextArea chars={text} />
      <Keyboard type={0} addCharToText={(char) => addCharToText(char)} />
    </>
  );
}

export default App;
