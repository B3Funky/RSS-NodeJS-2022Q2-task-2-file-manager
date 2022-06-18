import fs from 'fs/promises';
import { resolve } from 'path';

const ls = async (path) => await fs.readdir(resolve(path));

export default ls;
