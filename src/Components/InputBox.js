import React from "react";
import "./InputBox.css";

export const InputBox = ({ label, setAttribute }) => {
  return (
    <div className="inputBoxContainer">
      <label className="label">{label}</label>
      <textarea
        className="input"
        onChange={(e) => setAttribute(e.target.value)}
        placeholder="An astronaut riding a horse in a photorealistic style"
      />
    </div>
  );
};
