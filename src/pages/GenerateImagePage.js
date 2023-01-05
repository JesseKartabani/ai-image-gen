import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { InputBox } from "../Components/InputBox";
import GenerateImageHeading from "../Components/GenerateImageHeading";
import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import SizingButtons from "../Components/SizingButtons";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

function GenerateImagePage() {
  const [userPrompt, setUserPrompt] = useState("");
  //const [number, setNumber] = useState(1);
  const [size, setSize] = useState("256x256");
  const [isLoading, setIsLoading] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const generateImage = async () => {
    try {
      setIsLoading(true);
      setImageLoaded(false);

      const imageParameters = {
        prompt: userPrompt,
        //n: parseInt(number),
        n: 1,
        size: size,
      };
      const response = await openai.createImage(imageParameters);
      const urlData = response.data.data[0].url;
      setImageUrl(urlData);

      setIsLoading(false);
      setHasImage(true);
      setIsError(false);
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(error.response.data.error.message);
      } else {
        console.log(error.message);
      }
    }
  };

  function handleImageGeneration() {
    setIsError(false);
    generateImage();
  }

  return (
    <main className="App">
      <GenerateImageHeading />

      {isError ? (
        // display an error message if there was an error
        <motion.p
          initial={{ opacity: 0.5, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="errorMessage"
        >
          {errorMessage}
        </motion.p>
      ) : isLoading ? (
        // loading spinner
        <CircularProgress />
      ) : hasImage ? (
        // once image is generated display it
        <motion.img
          // Fade and scale image in
          initial={{ opacity: 0.5, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="image"
          src={imageUrl}
          alt={userPrompt}
          // Only display image once its fully loaded
          // prevents images loading in from top to bottom
          onLoad={() => setImageLoaded(true)}
          style={imageLoaded ? {} : { display: "none" }}
        />
      ) : (
        // placeholder img (before user has generated an image)
        <motion.img
          // Fade and scale image in
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

      <motion.div
        // Fade and scale div in
        initial={{ opacity: 0.5, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="inputContainer"
      >
        <InputBox label={"Description"} setAttribute={setUserPrompt} />

        {/*<InputBox label={"Amount"} setAttribute={setNumber} />*/}

        {/* Buttons control image sizing */}
        <SizingButtons setSize={setSize} />

        {/* Button calls generate image*/}
        <button
          disabled={isLoading}
          className="generateButton"
          onClick={() => handleImageGeneration()}
        >
          Generate
        </button>
      </motion.div>
    </main>
  );
}

export default GenerateImagePage;
