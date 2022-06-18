import fs from 'fs';
import { resolve } from 'path';
import { consoleMessages as message } from '../utils/consoleMessages.js';

const cat = (path) => {
  return new Promise((res, rej) => {
    const readStream = fs.createReadStream(resolve(path));

    console.log(message.fileContent);
    readStream.pipe(process.stdout);

    readStream.on('end', () => {
      res('\n');
    });

    readStream.on('error', (err) => {
      rej(err);
    });
  });
};

export default cat;
