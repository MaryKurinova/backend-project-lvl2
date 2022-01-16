#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../index.js';

const program = new Command();
const options = program.opts();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format [type]', 'output format', 'stylish');

program
  .arguments('<filepath1>', 'first argument')
  .arguments('<filepath2>', 'second argument')
  .action((firstArg, secondArg) => {
    console.log(genDiff(firstArg, secondArg, options.format));
  })
  .parse(process.argv);
