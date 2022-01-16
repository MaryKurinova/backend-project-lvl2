import stylishFormat from './stylish';
import plainFormat from './plain';
import JSONformat from './json';
import getTree from '../getTree';

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
