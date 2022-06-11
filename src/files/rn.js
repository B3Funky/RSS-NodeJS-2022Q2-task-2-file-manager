import fs from 'fs/promises';
import { resolve, dirname } from 'path';

const rn = async (path, newFileName) => {
  await fs.rename(resolve(path), resolve(dirname(path), newFileName));
};

export default rn;
