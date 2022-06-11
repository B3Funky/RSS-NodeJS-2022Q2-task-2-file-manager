import * as readline from 'node:readline';
import * as os from 'node:os';
import { stdin as input, stdout as output } from 'node:process';

import { cd, up, ls } from './nwd/index.js';
import { cat, add, rn, cp, mv, rm } from './files/index.js';
import osInfo from './osInfo/index.js';
import { consoleMessages as message } from './utils/consoleMessages.js';

const app = () => {
  const rl = readline.createInterface({ input, output });

  cd(os.homedir());

  output.write(message.welcome);
  output.write(message.currentlyDir(process.cwd()));

  rl.on('line', async (input) => {
    if (input === '.exit') {
      rl.emit('SIGINT');
    } else {
      try {
        const [operation, ...args] = input.split(' ');

        if (operation === 'os') {
          console.log(osInfo(args.join(' ')));
        } else {
          switch (operation) {
            case 'up':
              up();
              break;

            case 'cd':
              cd(args.join(' '));
              break;

            case 'ls':
              output.write(message.ls(await ls(process.cwd())));
              break;

            case 'cat':
              if (!args.length) {
                output.write(message.needMin1Args);
              } else {
                const path = args.join(' ');

                output.write(await cat(path));
              }
              break;

            case 'add':
              const fileName = args.join(' ');

              await add(fileName);
              output.write(message.fileCreated(fileName));
              break;

            case 'rn':
              if (args.length < 2) {
                output.write(message.needMin2Args);
                throw new Error();
              } else {
                const [path, ...newFileNameArr] = args;
                const newFileName = newFileNameArr.join(' ');

                await rn(path, newFileName);
                output.write(message.fileRenamed(path, newFileName));
              }
              break;

            case 'cp':
              if (args.length < 2) {
                output.write(message.needMin2Args);
                throw new Error();
              } else {
                const [oldPath, ...newPathArr] = args;
                const newPath = newPathArr.join(' ');

                await cp(oldPath, newPath);
                output.write(message.fileCopied(oldPath, newPath));
              }
              break;

            case 'mv':
              if (args.length < 2) {
                output.write(message.needMin2Args);
                throw new Error();
              } else {
                const [oldPath, ...newPathArr] = args;
                const newPath = newPathArr.join(' ');

                await mv(oldPath, newPath);
                output.write(message.fileMoved(oldPath, newPath));
              }
              break;

            case 'rm':
              if (!args.length) {
                output.write(message.needMin1Args);
                throw new Error();
              } else {
                const fileName = args.join(' ');

                await rm(fileName);
                output.write(message.fileRemoved(fileName));
              }
              break;

            default:
              output.write(message.invalidInput);
          }
        }

        output.write(message.currentlyDir(process.cwd()));
      } catch (e) {
        if (e) {
          console.log(e);
        }
        output.write(message.operationFailed);
      }
    }
  });

  rl.on('SIGINT', () => {
    output.write(message.goodbye);
    rl.close();
  });
};

app();
