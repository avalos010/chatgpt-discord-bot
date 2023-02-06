import { REST, Routes } from "discord.js";
import { config } from "dotenv";

config();
const rest = new REST({ version: "10" }).setToken(process.env.CLIENT_TOKEN);

// ...

// for guild-based commands
rest
  .put(
    Routes.applicationGuildCommands(
      process.env.CLIENT_ID,
      process.env.GUILD_ID
    ),
    { body: [] }
  )
  .then(() => console.log("Successfully deleted all guild commands."))
  .catch(console.error);

// for global commands
rest
  .put(Routes.applicationCommands(process.env.CLIENT_ID), { body: [] })
  .then(() => console.log("Successfully deleted all application commands."))
  .catch(console.error);
