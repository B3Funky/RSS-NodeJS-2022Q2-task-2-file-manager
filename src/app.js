import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

import { username } from './utils/username.js';

const app = () => {
  const userName = username();
  const rl = readline.createInterface({ input, output });

  output.write(`Welcome to the File Manager, ${userName}!\n\n`);

  rl.on('line', (input) => {
    if (input === '.exit') {
      rl.emit('SIGINT');
    }
  });

  rl.on('SIGINT', () => {
    output.write(`\nThank you for using File Manager, ${userName}!\n`);
    rl.close();
  });
};

app();
