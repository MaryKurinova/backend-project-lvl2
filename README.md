### Проект "Вычислитель отличий"

<i>Вычислитель отличий</i> – проект, который по-настоящему прокачивает даже опытных разработчиков. Здесь вам придется столкнуться с принятием сложных архитектурных решений, автоматизированным тестированием и непрерывной интеграцией, функциональным программированием, работе с древовидными структурами данных и рекурсивными алгоритмами.


Для начала произведем установку <i>Commander</i> посредством npm install commander и запустим справку как указано ниже:

[![asciicast](https://asciinema.org/a/Ah16DPoZptbo3HTa3UFHqkBRq.svg)](https://asciinema.org/a/Ah16DPoZptbo3HTa3UFHqkBRq)

Далее нам необходимо произвести проверку плоских файлов JSON.
Диф строится на основе того как файлы изменились относительно друг друга, ключи выводятся в алфавитном порядке.
Отсутствие плюса или минуса говорит, что ключ есть в обоих файлах, и его значения совпадают. Во всех остальных ситуациях значение по ключу либо отличается, либо ключ есть только в одном файле.
Ниже приведен пример сравнения такого типа файлов:

[![asciicast](https://asciinema.org/a/C2wqgNrzbxILH6wSxf7LRfOo3.svg)](https://asciinema.org/a/C2wqgNrzbxILH6wSxf7LRfOo3)



### Hexlet tests and linter status:
[![Actions Status](https://github.com/MaryKurinova/backend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/MaryKurinova/backend-project-lvl2/actions)

<a href="https://codeclimate.com/github/MaryKurinova/backend-project-lvl2/maintainability"><img src="https://api.codeclimate.com/v1/badges/e181186341c12c3f9828/maintainability" /></a>

<a href="https://codeclimate.com/github/MaryKurinova/backend-project-lvl2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/e181186341c12c3f9828/test_coverage" /></a>



