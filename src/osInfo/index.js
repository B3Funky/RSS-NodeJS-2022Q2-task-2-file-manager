import os from 'os';
import { consoleMessages as message } from '../utils/consoleMessages.js';

const osInfo = (arg) => {
  switch (arg) {
    case '--EOL':
      return `Default system End-Of-Line: ${JSON.stringify(os.EOL)}`;

    case '--cpus':
      const cpus = os.cpus();
      let cpusInfo = `\nCPUs amount: ${cpus.length}\n--------------\n`;

      cpus.map((cpu, index) => {
        cpusInfo += `${index + 1} CPU:\n Model: ${cpu.model}\n Speed: ${(cpu.speed / 1000).toFixed(
          1
        )} GHz;\n`;
      });
      return cpusInfo;

    case '--homedir':
      return `Home directory: "${os.homedir()}"`;

    case '--username':
      return `Current user name: ${os.userInfo().username}`;

    case '--architecture':
      return `CPU architecture: ${os.arch()}`;

    default:
      return message.osArgNotFound;
  }
};

export default osInfo;
