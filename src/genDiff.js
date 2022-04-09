import getTree from './getTree.js';
import parsers from './parsers.js';
import formatter from './formatters/index.js';
import fs from 'fs';

export default (filePath1, filePath2, formatOutput = 'stylish') => {
  const dataFile1 = parsers(fs.readFileSync(filePath1, 'utf-8'));
  const dataFile2 = parsers(fs.readFileSync(filePath2, 'utf-8'));
  const diffTree = getTree(dataFile1, dataFile2);

  return formatter(diffTree, formatOutput);
};

//export default genDiff;
