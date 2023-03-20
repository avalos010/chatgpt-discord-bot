import { SlashCommandBuilder } from "discord.js";
import { createImage } from "../chatgpt.js";

export const data = new SlashCommandBuilder()
  .setName("image")
  .setDescription("Generate Image")
  .addStringOption((opt) =>
    opt
      .setName("description")
      .setRequired(true)
      .setDescription("Describe the image you want to generate")
  )
  .addIntegerOption((opt) =>
    opt
      .setName("quantity")
      .setRequired(false)
      .setDescription("How many images do you want to generate?")
  );

export async function execute(interaction) {
  await interaction.deferReply();
  const description = interaction.options._hoistedOptions[0].value;
  let images = "";
  await createImage(description)
    .then((urls) => {
      urls.forEach((url) => (images += `${description}\n ${url}\n`));
    })
    .then(() => interaction.editReply(images));
}
