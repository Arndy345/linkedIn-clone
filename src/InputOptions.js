import React from "react";
import "./InputOptions.css";

function InputOptions({ Icon, title, color }) {
  return (
    <div className="inputOption">
      <Icon className="inputOption__icon" style={{ color: color }} />
      <h3 className="inputOption__title">{title}</h3>
    </div>
  );
}

export default InputOptions;
