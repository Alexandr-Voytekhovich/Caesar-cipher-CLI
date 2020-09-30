const fs = require("fs");

function rewriteFile(data) {
  fs.writeFile('hello.txt', data,
  function(error) {
    if(error) console.log('Произошла ошибка записи!');
    console.log('Запись файла завершена.');
  }
  )
}

exports.writeFile = () => {
  fs.readFile('enter.txt', 'utf8', function (error, data) {
    if (error) console.log('При чтении файла что-то пошло не так...', error)
    rewriteFile(data)
  })
}
