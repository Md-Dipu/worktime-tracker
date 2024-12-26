import { Command } from 'commander';
import dotenv from 'dotenv';

dotenv.config();

const program = new Command();

program
  .name('Worktime Tracker')
  .description('CLI for tracking worktime')
  .version(process.env.VERSION as string);

program.parse(process.argv);
