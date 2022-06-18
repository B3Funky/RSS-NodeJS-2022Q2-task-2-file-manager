import fs from 'fs/promises';
import { resolve } from 'path';

const add = async (fileName) => {
  await fs.writeFile(resolve(process.cwd(), fileName), '', { flag: 'wx' });
};

export default add;
