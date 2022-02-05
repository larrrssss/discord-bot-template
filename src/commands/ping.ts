import { CommandInteraction, Message } from 'discord.js';

import { Command } from '../types/commands';

async function handler(interaction: CommandInteraction) {
  const message = (await interaction.reply({ content: 'Pong!', fetchReply: true })) as Message;

  const ping = message.createdTimestamp - interaction.createdTimestamp;

  await interaction.editReply({
    content: `Pong! - *${ping}ms*`,
  });
}

export default {
  handler,
  schema: {
    name: 'ping',
    description: 'This is your lifesaver',
  }
} as Command;