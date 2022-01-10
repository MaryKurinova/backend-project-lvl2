import { test, expect } from '@jest/globals';
import getFixturePath from '../src/getFixturePath.js';
import genDiff from '../index.js';

const file1 = getFixturePath('file1.json');
const file2 = getFixturePath('file2.json');
const failFile1 = getFixturePath('file2.fail');
const failFile2 = getFixturePath('file2.js');
const chekDiffFiles = genDiff(filepath1, filepath2);
const failFormat = genDiff(failFile1, failFile2);

test('genDiff return string', () => {
  expect(typeof chekDiffFiles).toEqual('string');
});

test('genDiff return mistake', () => {
  expect(failFormat).toEqual("Check '.json' formats");
});
