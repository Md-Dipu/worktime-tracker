import { Command } from 'commander';
import dotenv from 'dotenv';

import startCommand from './commands/start';
import stopCommand from './commands/stop';
import viewCommand from './commands/view';

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

program
  .command('view')
  .description('View worktime logs')
  .option('-d, --date <date>', 'Specify a date to view logs for (YYYY-MM-DD)')
  .action(viewCommand);

program.parse(process.argv);
