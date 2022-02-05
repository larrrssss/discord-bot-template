import { Command } from './commands';

declare module 'discord.js' {
  export interface Client {
    commands: Command[];
  }
}