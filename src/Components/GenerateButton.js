// GenerateButton.js
import React from "react";
import "./GenerateButton.css";

const GenerateButton = ({ isLoading, handleImageGeneration }) => {
  return (
    <button
      disabled={isLoading}
      className="generateButton"
      onClick={() => handleImageGeneration()}
    >
      Generate
    </button>
  );
};

export default GenerateButton;
