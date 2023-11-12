import { useState } from "react";
import ToolBar from "./components/ToolBar";
import "./App.css";
import Keyboard from "./components/keyboard";
import TextArea from "./components/TextArea";

function App() {
  const [text, setText] = useState([]);

  function addCharToText(char) {
    setText([...text, char]);
  }
  function removeChar() {
    setText(text.length > 0 ? text.slice([text.length - 2]) : []);
  }
  return (
    <>
      <ToolBar />
      <TextArea chars={text} />
      <Keyboard type={0} addChar={addCharToText} prev={removeChar} />
    </>
  );
}

export default App;
