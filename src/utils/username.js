const prefix = '--username=';

export const username = () => {
  if (
    process.argv.length > 2 &&
    process.argv[2].startsWith(prefix) &&
    process.argv[2].length > prefix.length
  ) {
    return process.argv[2].split(prefix)[1];
  } else {
    return 'Anonymous';
  }
};
