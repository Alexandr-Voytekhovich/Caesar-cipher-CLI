const program = require('commander');
const workWithFiles = require('./file-system')
const convertation = require('./convertation');

program
  .version('0.0.1')
  .description('log values')

program
  .command('logValue')
  .alias('l')
  .description('log value in console')
  .action(() => workWithFiles.writeFile())

program
.command('logValue2')
.alias('l1')
.description('log value in console')
.action(() => workWithFiles.write())


program.parse(process.argv);