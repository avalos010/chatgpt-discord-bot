import { openai } from "./openai.js";

export async function runCompletion(question) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: question,
  });

  console.log(completion.data);

  return completion.data.choices[0].text;
}

export async function createImage(description) {
  const completion = await openai.createImage({
    response_format: "url",
    prompt: description,
    n: 3,
    size: "1024x1024",
  });

  const url = completion.data.data[0].url;
  return url;
}
