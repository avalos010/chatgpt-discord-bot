import api from "./api.js";

export default async function ask(question) {
  const res = await api.sendMessage(question);
  return res.text;
}
