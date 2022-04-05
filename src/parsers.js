
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

const parsers = (file) => {
  const files = path.extname(file);
  const pathToFile = path.resolve('__fixtures__', file);

  if (files === '.yml' || files === '.yaml') {
    const diff = yaml.load(fs.readFileSync(pathToFile, 'utf8'));
    return diff;
  }
  if (files === '.json') {
    const diff = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
    return diff;
  }
  return undefined;
};

export default parsers;
