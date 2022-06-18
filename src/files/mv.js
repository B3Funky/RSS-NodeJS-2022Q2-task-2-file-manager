import { cp, rm } from './index.js';

const mv = async (pathToFile, pathToNewDir) => {
  await cp(pathToFile, pathToNewDir);

  await rm(pathToFile);
};

export default mv;
