import { resolve } from 'path';

const up = () => {
  process.chdir(resolve('../'));
};

export default up;
