import { BitFieldResolvable, Client, IntentsString } from 'discord.js';
import path from 'path';

import { getFiles } from './lib/utils';
import { Command } from './types/commands';

// Add discord intents if needed here (Discord.Intents.FlAGS)
const intents: BitFieldResolvable<IntentsString, number> = ['GUILDS', 'GUILD_MESSAGES'];

const client = new Client({ intents });

client.on('ready', async () => {
  console.log(`Logged in as ${client.user?.tag}`);

  client.commands = await getFiles<Command>(path.join(__dirname, 'commands'));
});

client.on('interactionCreate', (interaction) => {
  if (interaction.isCommand()) {
    for (const cmd of client.commands) {
      if (cmd.schema.name === interaction.commandName)
        return cmd.handler(interaction);
    }
  }
});

export default client;