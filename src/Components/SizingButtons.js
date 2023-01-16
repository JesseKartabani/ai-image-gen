import React from "react";
import "./SizingButtons.css";

const SizingButtons = ({ setSize, user }) => {
  return (
    <>
      {user && (
        <div className="sizingButtonsContainer">
          <button className="sizingButton" onClick={() => setSize("256x256")}>
            Small
          </button>
          <button className="sizingButton" onClick={() => setSize("512x512")}>
            Medium
          </button>
          <button className="sizingButton" onClick={() => setSize("1024x1024")}>
            Large
          </button>
        </div>
      )}
    </>
  );
};

export default SizingButtons;
