import React, { useState } from "react";
import "../css/toolbar.css";
export default function ToolBar() {
  const [color, setColor] = useState("black");
  const [font, setFont] = useState("Arial");
  const [fontSize, setFontSize] = useState(14);
  const colorPickerStyle = {
    color: color,
  };
  return (
    <>
      <div id="toolbar">
        <div className="color-picker-div">
          <h4>Color</h4>
          <input
            style={colorPickerStyle}
            id="color-picker"
            onChange={(e) => {
              setColor(e.target.value);
            }}
            type="color"
          />
        </div>
        <div className="font-size">
          <h4> Font Size</h4>
          <input
            onClick={(e) => {
              setFontSize(e.target.value);
            }}
            type="number"
          />
        </div>

        <div className="font">
          <label htmlFor="fontSelector">
            <h4> Font: </h4>
          </label>
          <select
            id="fontSelector"
            onChange={(e) => {
              setFont(e.target.value);
            }}
          >
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
            <option value="Courier New">Courier New</option>
          </select>
        </div>
        <div
          onClick={(e) => {
            console.log(e.target.value);
          }}
        >
          <h4> Undo</h4>
        </div>
      </div>
    </>
  );
}
