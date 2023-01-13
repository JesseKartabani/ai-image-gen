import React from "react";
import { Route, Routes } from "react-router-dom";
import GenerateImagePage from "./pages/GenerateImagePage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Analytics
const firebaseConfig = {
  apiKey: "AIzaSyC78gJeg8jOAgizmzl0vW0dIWvoMA-cp1s",
  authDomain: "ai-image-generator-f4c78.firebaseapp.com",
  projectId: "ai-image-generator-f4c78",
  storageBucket: "ai-image-generator-f4c78.appspot.com",
  messagingSenderId: "133932092710",
  appId: "1:133932092710:web:cd3c257897e358703105e7",
  measurementId: "G-G25FPHDGW5",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <Routes>
      <Route path="/" element={<GenerateImagePage />} />

      <Route path="/edit-image" element={<GenerateImagePage />} />
    </Routes>
  );
}

export default App;
