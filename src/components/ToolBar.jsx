import React from "react";
import "../css/toolbar.css";
export default function ToolBar({
  changeColor,
  changeFontSize,
  changeFont,
  color,
  font,
  fontSize,
  remove,
  undo,
  reset,
}) {
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
            onChange={changeColor}
            type="color"
          />
        </div>
        <div className="font-size">
          <h4> Font Size</h4>
          <input
            min="8"
            max="20"
            onChange={changeFontSize}
            value={fontSize}
            type="number"
          />
        </div>

        <div className="font">
          <label htmlFor="fontSelector">
            <h4> Font</h4>
          </label>
          <select id="fontSelector" onChange={changeFont}>
            <option value={font}>{font}</option>
            {font !== "Arial" && <option value="Arial">Arial</option>}{" "}
            {font !== "Times New Roman" && (
              <option value="Times New Roman">Times New Roman</option>
            )}
            {font !== "Verdana" && <option value="Verdana">Verdana</option>}{" "}
            {font !== "Courier New" && (
              <option value="Courier New">Courier New </option>
            )}
          </select>
        </div>
        <div onClick={undo}>
          <h4> Undo</h4>
        </div>
        <div onClick={remove}>
          <h4> Delete</h4>
        </div>
        <div onClick={reset}>
          <h4> Reset</h4>
        </div>
      </div>
    </>
  );
}
