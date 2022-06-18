import fs from 'fs';
import { resolve } from 'path';
import { createHash } from 'crypto';

const hash = async (path) => {
  return new Promise((res, rej) => {
    const readStream = fs.createReadStream(resolve(path));
    const hashSum = createHash('sha256').setEncoding('hex');

    readStream.pipe(hashSum);

    readStream.on('end', () => {
      res(hashSum.read());
    });

    readStream.on('error', (err) => {
      rej(err);
    });
  });
};

export default hash;
