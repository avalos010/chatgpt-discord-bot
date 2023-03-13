import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv";
import { createImage } from "./chatgpt.js";
config();

const apiKey = process.env.OPENAI_API_KEY;
const configuration = new Configuration({
  apiKey,
});

export const openai = new OpenAIApi(configuration);

// createImage("Cat with 3 eyes");
