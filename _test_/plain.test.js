import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import parsers from '../src/parsers.js';
import getPath from '../src/getPath.js';
import plainFormat from '../src/formatters/plain.js';
import getTree from '../src/getTree.js';

const arg1 = getPath('file1.json');
const arg2 = getPath('file2.json');

const file1 = fs.readFileSync(path.resolve(arg1), 'utf-8');
const file2 = fs.readFileSync(path.resolve(arg2), 'utf-8');
const firstFile = parsers(file1, arg1);
const secondFile = parsers(file2, arg2);
const nestedTree = getTree(firstFile, secondFile);
const nestedObject = plainFormat(nestedTree);

test('typeof result', () => {
  expect(typeof nestedObject).toEqual('string');
});

test('equal values', () => {
  expect(nestedObject.includes("Property 'common.follow' was added with value: false")).toEqual(true);
  expect(nestedObject.includes('common.setting6.doge.wow')).toEqual(true);
});
