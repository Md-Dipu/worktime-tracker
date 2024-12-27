import { Command } from 'commander';
import dotenv from 'dotenv';

import startCommand from './commands/start';

dotenv.config();

const program = new Command();

program
  .name('Worktime Tracker')
  .description('CLI for tracking worktime')
  .version(process.env.VERSION as string);

program
  .command('start')
  .description('Start a work session')
  .action(startCommand);

program.parse(process.argv);
