import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.GEMINI_API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
