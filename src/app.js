import * as readline from 'node:readline';
import * as os from 'node:os';
import { stdin as input, stdout as output } from 'node:process';

import { cd, up, ls } from './nwd/index.js';
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

          default:
            output.write(message.invalidInput);
        }

        output.write(message.currentlyDir(process.cwd()));
      } catch (e) {
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
