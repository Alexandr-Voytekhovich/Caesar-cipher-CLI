const fs = require("fs");
const convertation = require('./convertation');


function rewriteFile(data, path='./output-file/output-file.txt') {
  fs.writeFile(path, data, { flag: 'a+' },
  function(error) {
    if(error) console.log('Произошла ошибка записи!');
    console.log('Запись файла завершена.');
  }
  )
}

exports.writeFile = (
  method, 
  cryptKey, 
  inputPath='./input-file/input-file.txt',
  outputPath
  ) => {
    fs.readFile(inputPath, 'utf8', function (error, data) {

      if (error) process.stderr.write('11111111111111111111omg')

      let convertationData = ''

      if (method === 'encrypt' || method === 'e') {
        convertationData = convertation.encrypt(data, cryptKey);
      }
      if (method === 'decrypt' || method === 'd') {
        convertationData = convertation.decrypt(data, cryptKey);
      } 

      rewriteFile(convertationData, outputPath)
  })
}
