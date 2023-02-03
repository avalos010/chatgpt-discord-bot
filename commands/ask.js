const { SlashCommandBuilder } = require("discord.js");
const { ask } = require("../chatgpt");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ask")
    .setDescription("Ask ChatGPT")
    .addStringOption((option) =>
      option
        .setName("question")
        .setDescription("question to ask")
        .setRequired(true)
    ),
  async execute(interaction) {
    const question = interaction.options._hoistedOptions[0].value;
    const answer = await ask(question);
    console.log(answer);
    await interaction.reply("Answer!");
  },
};
