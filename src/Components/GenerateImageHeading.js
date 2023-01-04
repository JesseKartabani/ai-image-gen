import React from "react";
import "./GenerateImageHeading.css";
import { motion } from "framer-motion";

function GenerateImageHeading() {
  return (
    // Fade in from top of screen
    <motion.h2
      initial={{ opacity: 0.5, y: -300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="generateImageHeading"
    >
      Describe An Image
    </motion.h2>
  );
}

export default GenerateImageHeading;
