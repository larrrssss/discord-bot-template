import 'dotenv/config';

import client from './client';

client.login(process.env.DISCORD_BOT_TOKEN);