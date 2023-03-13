import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv";
config();

const apiKey = process.env.OPENAI_API_KEY;
const configuration = new Configuration({
  apiKey,
});

export const openai = new OpenAIApi(configuration);
