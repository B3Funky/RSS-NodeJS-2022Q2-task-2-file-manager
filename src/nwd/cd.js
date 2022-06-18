import { resolve } from 'path';

const cd = (path) => {
  process.chdir(resolve(path));
};

export default cd;
