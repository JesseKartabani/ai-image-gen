import React from "react";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";
import "./ImageContainer.css";

const ImageContainer = ({
  isError,
  errorMessage,
  isLoading,
  hasImage,
  imageUrl,
  userPrompt,
  imageLoaded,
  setImageLoaded,
}) => {
  return (
    <>
      {isError ? (
        <motion.p
          initial={{ opacity: 0.5, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="errorMessage"
        >
          {errorMessage}
        </motion.p>
      ) : isLoading ? (
        <CircularProgress data-testid="circular-progress" />
      ) : hasImage ? (
        <motion.img
          initial={{ opacity: 0.5, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="image"
          src={imageUrl}
          alt={userPrompt}
          onLoad={() => setImageLoaded(true)}
          style={imageLoaded ? {} : { display: "none" }}
        />
      ) : (
        <motion.img
          initial={{ opacity: 0.5, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="image"
          src={require("../assets/astronaut.jpg")}
          alt="Astronaut riding a horse"
          loading="eager"
        />
      )}
    </>
  );
};

export default ImageContainer;
