import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { InputBox } from "./Components/InputBox";
import GenerateImageHeading from "./Components/GenerateImageHeading";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState("256x256");
  const [imageUrl, setImageUrl] = useState("");

  const generateImage = async () => {
    const imageParameters = {
      prompt: userPrompt,
      n: parseInt(number),
      size: size,
    };
    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data[0].url;
    setImageUrl(urlData);
  };

  return (
    <main className="App">
      <GenerateImageHeading />
      {imageUrl && <img src={imageUrl} className="image" alt="Ai generated" />}
      <div>
        <InputBox label={"Description"} setAttribute={setUserPrompt} />
        <InputBox label={"Amount"} setAttribute={setNumber} />
        <InputBox label={"Size"} setAttribute={setSize} />
        <button className="mainButton" onClick={() => generateImage()}>
          Generate
        </button>
      </div>
    </main>
  );
}

export default App;
