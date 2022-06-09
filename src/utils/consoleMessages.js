import { username } from './username.js';

const userName = username();

export const consoleMessages = {
  welcome: `\x1b[32m Welcome to the File Manager, ${userName}!\x1b[0m\n\n`,

  goodbye: `\x1b[36m\n Thank you for using File Manager, ${userName}!\x1b[0m\n`,

  invalidInput: `\x1b[34mInvalid input!\x1b[0m\n`,

  operationFailed: `\x1b[31mOperation failed!\x1b[0m\n`,

  currentlyDir: (path) => `\x1b[33mYou are currently in ${path}\x1b[0m\n`,

  ls: (list) => {
    let filesList = '\n\x1b[35m--- Files and directories: ---\n\n\x1b[32m';
    list.forEach((fileName) => {
      filesList += `${fileName}\n`;
    });
    return (filesList += '\x1b[0m\n');
  },
};
