import OpenAI from "openai";

export const nararouter = new OpenAI({
  apiKey: process.env.NARAROUTER_API_KEY!,
  baseURL: "https://router.bynara.id/v1",
});