import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

export default getPath;
