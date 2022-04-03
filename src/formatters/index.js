import stylish from './stylish.js';
import plainFormat from './plain.js';
import json from './json.js';

export default (diff, format) => {
  switch (format) {
    case 'stylish':
      return stylish(diff);

    case 'plain':
      return plainFormat(diff);

    case 'json':
      return json(diff);

    default:
      throw new Error(`Unknown format: '${format}'!`);
  }
};
