import fs from 'fs/promises';
import { resolve } from 'path';

const rn = async (path, newFileName) => {
  await fs.rename(resolve(path), newFileName);
};

export default rn;
