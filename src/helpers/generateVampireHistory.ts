import { model } from "../libs/gemini";
import { convertImageToBase64 } from "./convertImageUrlToBase64";

export default async function generateVampireHistory(url: string): Promise<string> {
    const transformedBase64 = await convertImageToBase64(url);

    const imageGemini = {
        inlineData: {
            data: transformedBase64,
            mimeType: "image/webp", // Puedes cambiar esto si el formato es diferente
        },
    };

    let geminiResponse = null;

    while(true) {
        try {
            geminiResponse = await model.generateContent([
                imageGemini,
                "Make a fiction vampire history using the image, try tell her origin and interest bloody lore, you are a writer of horror books, can use markdown for separate subtitles",
            ]);

            break;
        } catch (error) {
            console.log(error);
        }
    }


    return geminiResponse.response.text();
}   