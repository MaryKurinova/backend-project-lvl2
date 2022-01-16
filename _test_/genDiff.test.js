import { test, expect } from '@jest/globals';
import getPath from '../src/getPath.js';
import genDiff from '../index.js';

const file1 = getPath('file1.json');
const file2 = getPath('file2.json');
const failFile1 = getPath('file2.fail');
const failFile2 = getPath('file2.js');
const chekDiffFiles = genDiff(file1, file2);
const failFormat = genDiff(failFile1, failFile2);

test('genDiff return string', () => {
  expect(typeof chekDiffFiles).toEqual('string');
});

test('genDiff return mistake', () => {
  expect(failFormat).toEqual("Check '.json', '.yaml', '.yml' formats");
});
