import stylishFormat from './stylish.js';
import plainFormat from './plain.js';
import JSONformat from './json.js';
import getTree from '../getTree.js';

const trueFormat = (file1, file2, format) => {
  const tree = getTree(file1, file2);

  if (format === 'plain') {
    return plainFormat(tree);
  }
  if (format === 'json') {
    return JSONformat(tree);
  }

  return stylishFormat(tree);
};

export default trueFormat;
