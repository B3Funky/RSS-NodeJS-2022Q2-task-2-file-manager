import fs from 'fs/promises';
import { resolve } from 'path';

const rm = async (path) => {
  await fs.rm(resolve(path));
};

export default rm;
