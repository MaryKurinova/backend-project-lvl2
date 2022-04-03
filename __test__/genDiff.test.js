import * as fs from 'fs';
import genDiff from '../src/genDiff';
import getPath from '../src/getPath';

const readFile = (filename) => fs.readFileSync(getPath(filename), 'utf-8').trim();

it('test genDiff format stylish', () => {
  expect(genDiff('file1.json', 'file2.json', 'stylish')).toEqual(readFile('stylish.txt'));
});
it('test genDiff format stylish', () => {
  expect(genDiff('file1.yml', 'file2.yml', 'stylish')).toEqual(readFile('stylish.txt'));
});
it('test genDiff format plain', () => {
  expect(genDiff('file1.yml', 'file2.yml', 'plain')).toEqual(readFile('plain.txt'));
});
it('test genDiff format plain', () => {
  expect(genDiff('file1.json', 'file2.json', 'plain')).toEqual(readFile('plain.txt'));
});
it('test genDiff format json', () => {
  expect(genDiff('file1.json', 'file2.json', 'json')).toEqual(readFile('json.txt'));
});
it('test genDiff format json', () => {
  expect(genDiff('file1.yml', 'file2.yml', 'json')).toEqual(readFile('json.txt'));
});