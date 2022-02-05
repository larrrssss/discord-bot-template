# Discord Bot Template

Simple bot template using typescript & slash commands

## Scripts

* `start` -> Builds & starts the bot
* `dev` -> Start the bot in dev mode (auto restart on file change)
* `build` -> Build JavaScript code
* `tasks`
  * `commands`
    * `tasks:commands:register` -> Register all slash commands
    * `tasks:commands:unregister` -> Unregister all slash commands

## ENV

* `NODE_ENV` -> Whether the app is in `production` mode or not
* `DISCORD_GUILD_ID` -> Discord guild id for testing
  * If you are trying to register commands outside of production mode (`NODE_ENV=production`), this guild id will be used to register commands.
* `DISCORD_BOT_TOKEN` -> Discord application bot token
* `DISCORD_CLIENT` -> Discord client id
  * Used to register slash commands