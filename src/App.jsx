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
  const obj = {
    color: color,
    fontSize: fontSize,
    font: font,
  };
  function addCharToText(char) {
    obj.content = char;
    setText((prev) => {
      return [...prev, obj];
    });
  }
  function removeChar() {
    setText(text.length > 0 ? text.slice(0, text.length - 1) : []);
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
        prev={removeChar}
      />
      <TextArea chars={text} />
      <Keyboard type={0} addCharToText={(char) => addCharToText(char)} />
    </>
  );
}

export default App;
