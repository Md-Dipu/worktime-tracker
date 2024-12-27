import { Command } from 'commander';
import dotenv from 'dotenv';

import startCommand from './commands/start';
import stopCommand from './commands/stop';

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

program
  .command('stop')
  .description('Stop the current work session')
  .action(stopCommand);

program.parse(process.argv);
