#!/usr/bin/env node
import { Command } from 'commander';
import  genDiff from '../src/genDiff.js';

const program = new Command();

program.version('0.0.1', '-v, --vers', 'output the current version');
program.description('Compares two configuration files and shows a difference.');
program.option('-f, --format <type>', 'output format');
program.arguments('<filepath1> <filepath2>');
program.action((filepath1, filepath2) => {
  console.log(genDiff(filepath1, filepath2));
});
program.parse();
