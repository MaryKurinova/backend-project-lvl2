#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program.version('0.0.1', '-v, --vers', 'output the current version');
program.description('Compares two configuration files and shows a difference.');
program.arguments('<filePath1> <filePath2>');
program.option('-f, --format <type>', 'output format');
program.action((filePath1, filePath2) => {
  compare(filePath1, filePath2);
});
program.parse();
