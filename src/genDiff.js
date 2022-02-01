import fs from 'fs';
import path from 'path';
import parsers from './parsers.js';
import formatter from './formatters/index.js';

const checkFilesFormat = (file1, file2) => {
  const formats = ['.yml', '.yaml', '.json'];
  if (
    formats.includes(path.extname(file1))
    && formats.includes(path.extname(file2))
  ) {
    return false;
  }
  return true;
};

export const genDiff = (arg1, arg2, format) => {
  if (checkFilesFormat(arg1, arg2)) {
    return "Check '.json', '.yaml', '.yml' formats";
  }

  const file1 = fs.readFileSync(path.resolve(arg1), 'utf-8');
  const file2 = fs.readFileSync(path.resolve(arg2), 'utf-8');
  const firstFile = parsers(file1, arg1);
  const secondFile = parsers(file2, arg2);

  return formatter(firstFile, secondFile, format);
};

export default genDiff;
