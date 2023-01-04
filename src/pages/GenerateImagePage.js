import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { InputBox } from "../Components/InputBox";
import GenerateImageHeading from "../Components/GenerateImageHeading";
import { CircularProgress } from "@mui/material";

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

  const generateImage = async () => {
    try {
      setIsLoading(true);

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
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <main className="App">
      <GenerateImageHeading />

      {isLoading ? (
        // loading spinner
        <CircularProgress />
      ) : hasImage ? (
        // once image is generated display it
        <img className="image" src={imageUrl} alt={userPrompt} />
      ) : (
        // placeholder img (before user has generated an image)
        <img
          className="image"
          src={require("../assets/astronaut.jpg")}
          alt="Astronaut riding a horse"
        />
      )}

      <div className="inputContainer">
        <InputBox label={"Description"} setAttribute={setUserPrompt} />

        {/*<InputBox label={"Amount"} setAttribute={setNumber} />*/}

        {/* Buttons control image sizing */}
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

        {/* Button calls generate image*/}
        <button
          disabled={isLoading}
          className="generateButton"
          onClick={() => generateImage()}
        >
          Generate
        </button>
      </div>
    </main>
  );
}

export default GenerateImagePage;
