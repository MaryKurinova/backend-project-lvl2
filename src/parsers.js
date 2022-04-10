import _ from 'lodash';
import yaml from 'js-yaml';

const parse = {
  yaml: yaml.load,
  yml: yaml.load,
  json: JSON.parse,
};

export default (data, format) => {
  if (!_.has(parse, format)) {
    throw new Error(`Unknown extension: '${format}'!`);
  }
  const parsers = parse[format];
  return parsers(data);
};
