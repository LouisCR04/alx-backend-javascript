// Using Process stdin
process.stdout.write('Welcome to Holberton School, what is your name?\n')

process.stdin.on('readable', () => {
  const str = process.stdin.read();

  if (str){
    process.stdout.write(`Your name is: ${str}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
