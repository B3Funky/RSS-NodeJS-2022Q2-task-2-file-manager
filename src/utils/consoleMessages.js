import { username } from './username.js';

const userName = username();

export const consoleMessages = {
  welcome: `\x1b[32m Welcome to the File Manager, ${userName}!\x1b[0m\n\n`,

  goodbye: `\x1b[36m\n Thank you for using File Manager, ${userName}!\x1b[0m\n`,

  invalidInput: `\x1b[34mInvalid input!\x1b[0m\n`,

  operationFailed: `\x1b[31mOperation failed!\x1b[0m\n`,

  fileContent: '\n\x1b[35m--- File content: ---\n\n\x1b[0m',

  needMin1Args: `\x1b[31mMinimum 1 argument required\x1b[0m\n`,

  needMin2Args: `\x1b[31mMinimum 2 arguments required\x1b[0m\n`,

  currentlyDir: (path) => `\x1b[33mYou are currently in ${path}\x1b[0m\n`,

  ls: (list) => {
    let filesList = '\n\x1b[35m--- Files and directories: ---\n\n\x1b[32m';
    list.forEach((fileName) => {
      filesList += `${fileName}\n`;
    });
    return (filesList += '\x1b[0m\n');
  },

  fileCreated: (fileName) => `\x1b[32mFile "${fileName}" created!\x1b[0m\n`,

  fileRenamed: (filePath, fileName) =>
    `\x1b[32mFile "${filePath}" renamed to "${fileName}"!\x1b[0m\n`,

  fileCopied: (oldPath, newPath) => `\x1b[32mFile "${oldPath}" copied to "${newPath}"!\x1b[0m\n`,

  fileMoved: (oldPath, newPath) => `\x1b[32mFile "${oldPath}" moved to "${newPath}"!\x1b[0m\n`,

  fileRemoved: (fileName) => `\x1b[32mFile "${fileName}" removed!\x1b[0m\n`,

  osArgNotFound: '\x1b[31mArgument not supported!\x1b[0m\n',
};
