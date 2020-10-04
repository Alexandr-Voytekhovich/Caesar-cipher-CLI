# Всем заглянувшим доброго дня. 

### Вся информация по проделанной работе ниже:

**Для запуска программы:**
- скачайте репозиторий на свой компьютер;
- откройте ваш терминал и переместитесь в папку **caesar-cipher-cli**;
- установите зависимости командой *npm i*;
- запустите в командной строке файл **cli.js** c нужными аргументами-опциями.  
  
```
node cli.js ...options 
```  
  
**Доступные аргументы:**
- [**обязательный аргумент**] ```--method или -m``` - метод работы программы. Возможные параметры: encrypt или decrypt (encrypt - шифровка, decrypt- дешифровка);
- [**обязательный аргумент**] ```--key или -k``` - ключ смещения. Может быть только положительным численным значением. Т.к. программа базируется на переводах сиволов в код ASCII, то корректно конвертируются только латинские буквы. Поэтому было принято решение ограничить конвертацию крайними буквами алфавита. Если вы передадите ключ, который превышает порядковый номер буквы в алфавите, то в результате конвертации вы получите крайнюю букву алфавита (шифровка - z-Z, дешифровка - a-A);
- ```--input или -i``` - путь к входному файлу. Если не задан, то пользователю будет предложено ввести текст в process.stdin;
- ```--output или -o``` - путь к выходному файлу. Если не задан, то вывод результата преобразования будет в process.stdout.  
  
**Ниже по тексту отчёта будут примеры команд и скриншоты работы приложения с привязкой к пунктам ТЗ.**  
  
[Ссылка на задание](https://github.com/rolling-scopes-school/nodejs-course-template/blob/master/TASKS.md#task-1-caesar-cipher-cli-tool)  

[Ссылка на критерии оценки. Для удобства проверки все критерии дублированы ниже по тексту в виде чекбоксов](https://github.com/rolling-scopes-school/nodejs-course-template/blob/master/CROSSCHECK.md)  
  
Каждый пункт 10 баллов, частичная реализация пункта 5 баллов. Каждый коммит после дедлайна (за исключением коммитов в README.md) минус 10 баллов

- [x] - в корне репозитория создана папка с произвольным названием (например caesar-cipher-cli, task1 и т.п.), в которой расположены файлы с кодом программы;
  
![#1](https://github.com/Alexandr-Voytekhovich/Caesar-cipher-CLI/blob/master/screenshots/1.png)  
- [x] - в README.md должно быть описано, как можно запустить программу из командной строки, описаны аргументы, которые можно передать приложению;  
  
![#2](https://github.com/Alexandr-Voytekhovich/Caesar-cipher-CLI/blob/master/screenshots/2.png)  
- [x] - если переданы все аргументы, приложение читает из файла и записывает в файл зашифрованный/расшифрованный текст, при этом предыдущие записи не удаляются;  
  
```node cli.js -m encrypt -k 2 -i ./input-file/input-file.txt -o ./output-file/output-file.txt```  
![#3](https://github.com/Alexandr-Voytekhovich/Caesar-cipher-CLI/blob/master/screenshots/3.png)
- [x] - если не переданы обязательные аргументы, приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0;  
  
```node cli.js```  
![#4](https://github.com/Alexandr-Voytekhovich/Caesar-cipher-CLI/blob/master/screenshots/4.png)  
  
```node cli.js -m encrypt```  
![#5](https://github.com/Alexandr-Voytekhovich/Caesar-cipher-CLI/blob/master/screenshots/5.png)
- [x] - если переданы аргументы с путями к файлам, но файлы отсутствуют (или к ним невозможен доступ), приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0;  
  
```node cli.js -m encrypt -k 2 -i ./input-file/input-file-13.txt -o ./output-file/output-file.txt```
![#6](https://github.com/Alexandr-Voytekhovich/Caesar-cipher-CLI/blob/master/screenshots/6.png)  
  
```node cli.js -m encrypt -k 2 -i ./input-file/input-file.txt -o ./output-file-1/output-file.txt```
![#7](https://github.com/Alexandr-Voytekhovich/Caesar-cipher-CLI/blob/master/screenshots/7.png) 
- [x] - если не передан аргумент с путем до файла на чтение, то чтение осуществляется из process.stdin;  
  
```node cli.js -m encrypt -k 2 -o ./output-file/output-file.txt```  
![#8](https://github.com/Alexandr-Voytekhovich/Caesar-cipher-CLI/blob/master/screenshots/8.png)
- [x] - если не передан аргумент с путем до файла на запись, то вывод осуществляется в process.stdout;  
  
```node cli.js -m encrypt -k 2 -i ./input-file/input-file.txt```  
![#9](https://github.com/Alexandr-Voytekhovich/Caesar-cipher-CLI/blob/master/screenshots/9.png)  
  
```node cli.js -m encrypt -k 2```  
![#10](https://github.com/Alexandr-Voytekhovich/Caesar-cipher-CLI/blob/master/screenshots/10.png) 
- [x] - шифруются/дешифруются только латинские буквы, регистр сохраняется, остальные символы не изменяются;  
  
```node cli.js -m encrypt -k 2```  
![#11](https://github.com/Alexandr-Voytekhovich/Caesar-cipher-CLI/blob/master/screenshots/11.png) 
- [x] - если текст вводится из консоли, то программа не должна завершаться после выполнения шифровки/дешифровки введенного текста, т.е. должна быть возможность ввести еще текст;  
  
```node cli.js -m encrypt -k 2```  
![#10](https://github.com/Alexandr-Voytekhovich/Caesar-cipher-CLI/blob/master/screenshots/10.png) 
- [x] - кодовая база не находится в одном файле, а разделена на файлы в соответствии с выполняемыми задачами (например - функция, преобразующая строку, в отдельном файле, код, создающий transform стрим, в отдельном файле, функция для парсинга и валидации аргументов в отдельном файле и т.п.);  
  
![#1](https://github.com/Alexandr-Voytekhovich/Caesar-cipher-CLI/blob/master/screenshots/1.png)  
  
Если возникнут какие-либо вопросы - буду рад ответить: 
- Telegram: https://t.me/AVT_tec
- Discord: AVT (@ Alexandr-Voytekhovich #9749)  

#### На этом всё, спасибо за внимание и хорошего дня =))
