import { useState } from "react";
import ToolBar from "./components/ToolBar";
import "./App.css";
import TextArea from "./components/TextArea";

function App() {
  const [text, setText] = useState([]);
  return (
    <>
      <ToolBar />
      <TextArea chars={text} />
    </>
  );
}

export default App;
