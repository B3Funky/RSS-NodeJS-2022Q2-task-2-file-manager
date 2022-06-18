import fs from 'fs';
import zlib from 'zlib';
import { basename, resolve } from 'path';
import { pipeline } from 'stream';

const decompress = async (archivePath, targetPath) => {
  return new Promise((res, rej) => {
    const readStream = fs.createReadStream(resolve(archivePath));
    const writeStream = fs.createWriteStream(
      resolve(targetPath, basename(archivePath).replace('.gz', ''))
    );
    const brotliDecompress = zlib.createBrotliDecompress();

    pipeline(readStream, brotliDecompress, writeStream, (err) => {
      if (err) {
        rej(err);
      } else res('\n');
    });
  });
};

export default decompress;
