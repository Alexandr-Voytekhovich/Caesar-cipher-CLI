const program = require('commander');
const workWithFiles = require('./file-system');

let argumentsFromConsole = process.argv.slice(2);

// node file method key input output

const argumentsForApp = {
  method: argumentsFromConsole[0],
  cryptKey: +argumentsFromConsole[1],
  inputFile: argumentsFromConsole[2],
  outputFile: argumentsFromConsole[3],
}

const { method, cryptKey, inputFile, outputFile } = argumentsForApp;

program
  .version('0.0.1')
  .description('Caesar cipher CLI')

program
  .command('encrypt')
  .alias('e')
  .description('encrypt text')
  .action(() => workWithFiles.writeFile(method, cryptKey, inputFile, outputFile))

program
  .command('decrypt')
  .alias('d')
  .description('decrypt text')
  .action(() => workWithFiles.writeFile(method, cryptKey, inputFile, outputFile))


program.parse(process.argv);