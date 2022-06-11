import fs from 'fs';
import zlib from 'zlib';
import { basename, resolve } from 'path';
import { pipeline } from 'stream';

const compress = async (sourceFilePath, archiveFolderPathArr) => {
  return new Promise((res, rej) => {
    const readStream = fs.createReadStream(resolve(sourceFilePath));
    const writeStream = fs.createWriteStream(
      resolve(archiveFolderPathArr, `${basename(sourceFilePath)}.gz`)
    );
    const brotliCompress = zlib.createBrotliCompress();

    pipeline(readStream, brotliCompress, writeStream, (err) => {
      if (err) {
        rej(err);
      } else res('\n');
    });
  });
};

export default compress;
