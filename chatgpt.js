import { openai } from "./openai.js";

export async function runCompletion(question) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: question,
    max_tokens: 64,
    temperature: 0.5,
    stop: null,
    echo: true,
  });

  return completion.data.choices[0].text;
}

export async function createImage(description) {
  const completion = await openai.createImage({
    response_format: "url",
    prompt: description,
    n: 3,
    size: "1024x1024",
  });

  const urls = completion.data.data.map((d) => d.url);
  return urls;
}

// runCompletion("How much is gas in ohio?");
