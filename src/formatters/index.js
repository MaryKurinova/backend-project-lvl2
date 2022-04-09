import stylishFormat from './stylish.js';
import plainFormat from './plain.js';
import json from './json.js';

export default (tree, format) => {
  switch (format) {
    case 'json':
      return json(tree);
    case 'plain':
      return plainFormat(tree);
    case 'stylish':
      return stylishFormat(tree);
    default:
      return new Error(`format ${format} not supported`);
  }
};
