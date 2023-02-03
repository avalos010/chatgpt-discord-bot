import api from "./api.js";

async function ask(question) {
  const res = await api.sendMessage(question);
  return res.text;
}

export { ask };
