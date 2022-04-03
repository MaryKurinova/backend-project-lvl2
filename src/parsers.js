import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFullPath = (filepath) => path.resolve(__dirname, '..', '__fixtures__', filepath);
const getExtension = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => readFileSync(filepath, 'utf8');

const checkExtension = (filePath) => {
  const fileFormat = getExtension(filePath);

  if (fileFormat === 'json') {
    return 'json';
  }
  if (fileFormat === 'yaml' || fileFormat === 'yml') {
    return 'yml';
  }
  throw new Error(`${fileFormat} extension is not supported. Available json or yaml`);
};

const parsers = (filepath) => {
  const extension = checkExtension(filepath);
  const normalizeFilePath = getFullPath(filepath);
  const rawData = getData(normalizeFilePath);
  const obj = extension === 'json' ? JSON.parse(rawData) : yml.load(rawData);
  return obj;
};

export default parsers;
