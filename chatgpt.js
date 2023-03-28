import { openai } from "./openai.js";

export async function runCompletion(question) {
  const completion = await openai.createCompletion({
    model: "gpt-4", //I have access to the beta version of gpt-4. use "text-davinci-003" for the public version
    prompt: question,
    max_tokens: 1000,
    temperature: 0.9,
    top_p: 1,
    stop: null,
    echo: true,
  });

  return completion.data.choices[0].text;
}

export async function createImage(description) {
  const completion = await openai.createImage({
    model: "gpt-4", //I have access to the beta version of gpt-4 use "text-davinci-003" for the public version
    response_format: "url",
    prompt: description,
    n: 1,
    // size: "1024x1024",
  });

  const urls = completion.data.data.map((d) => d.url);
  return urls;
}

// runCompletion("How much is gas in ohio?");
