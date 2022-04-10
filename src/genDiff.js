import { readFileSync } from 'fs';
import { resolve, extname } from 'path';
import getTree from './getTree.js';
import parsers from './parsers.js';
import formatter from './formatters/index.js';

const readFile = (file) => readFileSync(resolve(file), 'utf8');

const getFile = (file) => {
  const getFile1 = readFile(file);
  const getFile2 = extname(file).slice(1);
  return parsers(getFile1, getFile2);
};
export default (file1, file2, requiredFormat = 'stylish') => {
  const dataFile1 = getFile(file1);
  const dataFile2 = getFile(file2);
  const diffTree = getTree(dataFile1, dataFile2);
  return formatter(diffTree, requiredFormat);
};
