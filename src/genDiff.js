import getTree from './getTree.js';
import readFile from './parsers.js';
import formatter from './formatters/index.js';

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const dataFile1 = readFile(filePath1);
  const dataFile2 = readFile(filePath2);
  const diffTree = getTree(dataFile1, dataFile2);

  return formatter(diffTree, format);
};

export default genDiff;
