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

* `DISCORD_BOT_TOKEN` -> Discord application bot token
* `DISCORD_CLIENT` -> Discord client id
  * Used to register slash commands