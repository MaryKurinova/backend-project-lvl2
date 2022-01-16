import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import parsers from '../src/parsers';
import getPath from '../src/getPath';
import stylishFormat from '../src/formatters/stylish';
import getTree from '../src/getTree';

const arg1 = getPath('file1.json');
const arg2 = getPath('file2.json');

const file1 = fs.readFileSync(path.resolve(arg1), 'utf-8');
const file2 = fs.readFileSync(path.resolve(arg2), 'utf-8');
const firstFile = parsers(file1, arg1);
const secondFile = parsers(file2, arg2);
const nestedTree = getTree(firstFile, secondFile);
const nestedObject = stylishFormat(nestedTree);

test('typeof result', () => {
  expect(typeof nestedObject).toEqual('string');
});

test('equal values', () => {
  expect(nestedObject.includes('  + follow')).toEqual(true);
  expect(nestedObject.includes('  + group3:')).toEqual(true);
});
