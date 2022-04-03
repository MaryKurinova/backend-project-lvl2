import stylish from './stylish.js';
import plainFormat from './plain.js';
import json from './json.js';

const formatter = (data, formatType) => {
  switch (formatType) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plainFormat(data);
    case 'json':
      return json(data);
    default:
      throw new Error(`Unknown format: ${formatType}!`);
  }
};
export default formatter;
