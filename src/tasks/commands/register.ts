import 'dotenv/config';
import path from 'path';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

import { getFiles } from '../../lib/utils';
import { Command } from '../../types/commands';

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_BOT_TOKEN || '');

(async () => {
  const commands = await getFiles<Command>(path.join(__dirname, '../../commands'));

  const route = process.env.NODE_ENV === 'production'
    ? Routes.applicationCommands(process.env.DISCORD_CLIENT_ID || '')
    : Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID || '', process.env.DISCORD_GUILD_ID || '');

  console.log('Started refreshing application (/) commands');
  console.log(`Route: ${route}`);
  for (const cmd of commands) {
    try {      
      await rest.post(
        route,
        { body: { ...cmd.schema } },
      );
    } catch (e) {
      console.log(`Error registering command ${cmd.schema.name}`, e);
    }
  }

  console.log('Successfully reloaded application (/) commands');

  process.exit(0);
})();