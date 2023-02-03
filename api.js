import { ChatGPTAPI } from "chatgpt";
import { config } from "dotenv";
config();

const api = new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY });

export default api;
