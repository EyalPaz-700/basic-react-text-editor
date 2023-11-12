import { useState } from "react";
import ToolBar from "./components/ToolBar";
import "./App.css";
import Keyboard from "./components/keyboard";
import TextArea from "./components/TextArea";

function App() {
  const [text, setText] = useState([]);
  return (
    <>
      <ToolBar />
      <TextArea chars={text} />
      <Keyboard type={0} />
    </>
  );
}

export default App;
