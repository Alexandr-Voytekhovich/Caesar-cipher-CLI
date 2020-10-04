const cli = require('commander');
const workWithFiles = require('./file-system');

cli
  .version('0.0.1')
  .description('Caesar cipher CLI')

cli
  .option('-m, --method <value>', 'Work method (encrypt, decrypt)')
  .option('-k, --key <value>', 'Cipher key')
  .option('-i, --input <value>', 'Path to input file')
  .option('-o, --output <value>', 'Path to output file')
  .action((arguments) => {
    const { method, key, input, output } = arguments;

    workWithFiles.writeFile(method, +key, input, output)
  })

cli.parse(process.argv);

