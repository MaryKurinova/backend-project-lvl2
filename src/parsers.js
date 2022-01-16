import yaml from 'js-yaml';
import path from 'path';

const parsers = (filename, arg) => {
  const yamlFormats = ['.yml', '.yaml'];
  if (yamlFormats.includes(path.extname(arg))) {
    return yaml.load(filename);
  }

  if (path.extname(arg) === '.json') {
    return JSON.parse(filename);
  }

  return {};
};

export default parsers;
