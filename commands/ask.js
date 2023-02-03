import { SlashCommandBuilder } from "discord.js";
import ask from "../chatgpt.js";
import { setTimeout } from "node:timers/promises";

export const data = new SlashCommandBuilder()
  .setName("ask")
  .setDescription("Ask ChatGPT")
  .addStringOption((option) =>
    option
      .setName("question")
      .setDescription("question to ask")
      .setRequired(true)
  );

export async function execute(interaction) {
  await interaction.deferReply();
  const question = interaction.options._hoistedOptions[0].value;
  const answer = await ask(question).then((ans) =>
    interaction.editReply(`${question}\n ${ans}`)
  );
}
