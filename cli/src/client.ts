import { Command } from 'commander';
import dotenv from 'dotenv';

import startCommand from './commands/start';
import stopCommand from './commands/stop';
import viewCommand from './commands/view';
import addNoteCommand from './commands/add-note';
import deleteNoteCommand from './commands/delete-note';

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

program
  .command('add-note <sessionId> <note>')
  .description('Add or update a note for a work session')
  .action(addNoteCommand);

program
  .command('delete-note <sessionId>')
  .description('Delete a note for a work session')
  .action(deleteNoteCommand);

program.parse(process.argv);
