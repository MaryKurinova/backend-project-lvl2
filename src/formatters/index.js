import stylish from './stylish.js';
import plainFormat from './plain.js';
//import json from './json.js';

const Json = (tree) => JSON.stringify(tree);

const formatters = { stylish: stylish, plain: plainFormat, json: Json };
export default (data, name) => {
  const format = formatters[name];
  if (!format) {
    throw new Error(`Unknown formatter name(${name})!`);
  }

  return format(data);
};
