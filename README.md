# AI Image Generator

Utilizes the OpenAI API and the DALL-E model to generate original images based on user-provided text descriptions. The model is trained on the CIFAR-10 dataset and is able to generate a wide range of images, from photorealistic to highly stylized. The project also has a front-end interface built using React, allowing users to easily generate their own images.

## [Live Website](https://ai-image-generator-f4c78.web.app/)
![Capture](https://user-images.githubusercontent.com/69617120/210715188-2c7a72d4-5394-4a9f-b53f-690788c3ca04.PNG)

## API

[OpenAI](https://openai.com/api/)

## Building

In order to build this you must have git installed. Paste the following command in a directory of your choice.
Alternatively you can download the code as a .zip file and extract it.

```git
git clone https://github.com/JesseKartabani/ai-image-gen.git
cd ai-image-gen
npm install
```

To start a development enviroment use the following command.

```npm
npm start
```

If you want to add your own OpenAI API key do so by creating a .env file inside the root of the project.

```js
// Inside .env file
REACT_APP_API_KEY= = "yourKeyGoesHere";
```
