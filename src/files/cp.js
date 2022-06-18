import fs from 'fs';
import { resolve, basename } from 'path';
import { pipeline } from 'stream';

const cp = (pathToFile, pathToNewDir) => {
  return new Promise((res, rej) => {
    const readStream = fs.createReadStream(resolve(pathToFile));
    const writeStream = fs.createWriteStream(resolve(pathToNewDir, basename(pathToFile)));

    pipeline(readStream, writeStream, (err) => {
      if (err) {
        rej(err);
      } else res('\n');
    });
  });
};

export default cp;
