import { SlashCommandBuilder } from "discord.js";
import { runCompletion } from "../chatgpt.js";

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
  await runCompletion(question).then((ans) => {
    interaction.editReply(ans);
  });
}
