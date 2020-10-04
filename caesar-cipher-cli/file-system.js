const fs = require('fs');
var color = require('colors');
const convertation = require('./convertation');


function rewriteFile(data, path='./output-file/output-file.txt') {
  fs.writeFile(path, data, { flag: 'a+' }, (error) => {
      if(error) return process.stderr.write('ERROR'.underline.red + ': Output file path error!'.red + '\n')
      process.stdout.write('Запись файла успешно завершена.'.green + '\n');
    }
  )
}

exports.writeFile = (
  method, 
  cryptKey, 
  inputPath,
  outputPath
  ) => {

  if (method !== 'decrypt' && method !== 'encrypt') return process.stderr.write(
    'ERROR'.underline.red 
    + ': Invalid method passed!' + '\n' 
    + 'Plese enter the correct method'.green + ' (encrypt'.bold.green + ' or'.green + ' decrypt)'.bold.green + '.' + '\n')
  if (cryptKey < 0) return process.stderr.write(
    'ERROR'.underline.red 
    + ': Crypt key is negative!'.red + '\n' 
    + 'Plese enter a positive key.'.green + '\n')
  if (!cryptKey) return process.stderr.write(
    'ERROR'.underline.red 
    + ': The key is invalid or did not pass!'.red  
    + '\n' + 'Plese enter a valid key.'.green + '\n')

  let convertationData = ''

  if(!inputPath) {
    process.stdin.setEncoding('utf8');

    process.stdin.on('readable', () => {
      let inputValue = process.stdin.read()

      convertationData = convertation.detect(method, inputValue, cryptKey)
      
      if (!outputPath) {
        process.stdout.write(convertationData)
      } else rewriteFile(convertationData, outputPath)
      
      process.stdin.resume()
    });
    } else {
      fs.readFile(inputPath, 'utf8', function (error, data) {

        if (error) return process.stderr.write('ERROR'.underline.red + ': Input file path error!'.red + '\n')
  
        convertationData = convertation.detect(method, data, cryptKey)

        if (!outputPath) {
          process.stdout.write(convertationData + '\n')
        } else rewriteFile(convertationData, outputPath)
        
      })
    }

}
