import { genAI, model } from "../libs/gemini";
import { convertImageToBase64 } from "./convertImageUrlToBase64";

export default async function generateVampireHistory(
  url: string
): Promise<string> {
  const transformedBase64 = await convertImageToBase64(url);

  const imageGemini = {
    inlineData: {
      data: transformedBase64,
      mimeType: "image/webp", // Puedes cambiar esto si el formato es diferente
    },
  };

  let history = "";

  while (true) {
    try {
      const geminiResponse = await model.generateContent([
        imageGemini,
        "Make a fiction vampire history using the image, try tell her origin and interest bloody lore, you are a writer of horror books, can use markdown for separate subtitles",
      ]);

      history = geminiResponse.response.text();

      break;
    } catch (error) {
      console.log(error);
    }
  }

  return history;
}
