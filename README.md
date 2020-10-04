[Link to task](https://github.com/rolling-scopes-school/nodejs-course-template/blob/master/TASKS.md#task-1-caesar-cipher-cli-tool)

[Criterias](https://github.com/rolling-scopes-school/nodejs-course-template/blob/master/CROSSCHECK.md)

Каждый пункт 10 баллов, частичная реализация пункта 5 баллов. Каждый коммит после дедлайна (за исключением коммитов в README.md) минус 10 баллов

- [x] - в корне репозитория создана папка с произвольным названием (например caesar-cipher-cli, task1 и т.п.), в которой расположены файлы с кодом программы
- [ ] - в README.md должно быть описано, как можно запустить программу из командной строки, описаны аргументы, которые можно передать приложению
- [x] - если переданы все аргументы, приложение читает из файла и записывает в файл зашифрованный/расшифрованный текст, при этом предыдущие записи не удаляются
- [ ] - если не переданы обязательные аргументы, приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0
- [ ] - если переданы аргументы с путями к файлам, но файлы отсутствуют (или к ним невозможен доступ), приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0
- [ ] - если не передан аргумент с путем до файла на чтение, то чтение осуществляется из process.stdin
- [ ] - если не передан аргумент с путем до файла на запись, то вывод осуществляется в process.stdout
- [x] - шифруются/дешифруются только латинские буквы, регистр сохраняется, остальные символы не изменяются
- [ ] - если текст вводится из консоли, то программа не должна завершаться после выполнения шифровки/дешифровки введенного текста, т.е. должна быть возможность ввести еще текст
- [x] - кодовая база не находится в одном файле, а разделена на файлы в соответствии с выполняемыми задачами (например - функция, преобразующая строку, в отдельном файле, код, создающий transform стрим, в отдельном файле, функция для парсинга и валидации аргументов в отдельном файле и т.п.)

N.B. console.error пишет ошибку в process.stderr, большинство библиотек для парсинга параметров при ошибке также пишут в process.stderr. В VS Code, если запустить приложение в режиме дебага, можно увидеть в панели output, что цвет сообщений, выводимых в process.stdout и process.stderr отличаются.