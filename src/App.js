import React from "react";
import { Route, Routes } from "react-router-dom";
import GenerateImagePage from "./pages/GenerateImagePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GenerateImagePage />} />

      <Route path="/edit-image" element={<GenerateImagePage />} />
    </Routes>
  );
}

export default App;
