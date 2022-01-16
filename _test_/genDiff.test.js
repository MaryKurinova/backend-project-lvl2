import { test, expect } from '@jest/globals';
import getPath from '../src/getPath.js';
import genDiff from '../index.js';

const file1 = getPath('file1.json');
const file2 = getPath('file2.json');
const chekDiffFiles = genDiff(file1, file2);

test('genDiff return string', () => {
  expect(typeof chekDiffFiles).toEqual('string');
});
