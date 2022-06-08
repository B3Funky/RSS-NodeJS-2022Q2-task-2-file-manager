import * as readline from 'node:readline';
import * as os from 'node:os';
import { stdin as input, stdout as output } from 'node:process';

import { consoleMessages as message } from './utils/consoleMessages.js';

const app = () => {
  const rl = readline.createInterface({ input, output });

  process.chdir(os.homedir());

  output.write(message.welcome);
  output.write(message.currentlyDir(process.cwd()));

  rl.on('line', (input) => {
    output.write(message.currentlyDir(process.cwd()));

    if (input === '.exit') {
      rl.emit('SIGINT');
    }
  });

  rl.on('SIGINT', () => {
    output.write(message.goodbye);
    rl.close();
  });
};

app();
