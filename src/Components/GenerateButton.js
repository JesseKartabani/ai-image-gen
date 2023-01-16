// GenerateButton.js
import React from "react";
import "./GenerateButton.css";

const GenerateButton = ({ isLoading, handleImageGeneration, user }) => {
  return (
    <>
      {user && (
        <button
          disabled={isLoading}
          className="generateButton"
          onClick={() => handleImageGeneration()}
        >
          Generate
        </button>
      )}
    </>
  );
};

export default GenerateButton;
