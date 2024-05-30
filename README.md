СТРУКТУРА
-------------------

      build/              Собраные проекты
      public/             Статические файлы
      src/                Общий код проекта
        components/       Компоненты (часто используемы блоки)
        pages/            Код страниц
      global.css          Общий файл стилей

ТРЕБОВАНИЯ
------------

##### DEV

Для запуска dev версии требуется node JS

##### PROD

Версия prod может запустится из под

УСТАНОВКА
------------

### Установка через npm

Установка проекта запускается следующей командой в терминале в корне проекта:

~~~
npm install
~~~

ПЕРВЫЙ ЗАПУСК
------------
Для первого запуска вводится следующая команда в терминале в корне проекта:

~~~
npm run dev
~~~

Сайт будет доступен по следующему адресу:

http://localhost:3000

СБОРКА
------------
Сборка проекта запускается следующей командой в терминале в корне проекта:

~~~
npm run build
~~~

### Запуск

##### DEV

Для запуска dev версии вводится следующая команда в терминале в корне проекта:

~~~
npm run dev
~~~

##### PROD

Для запуска prod версии достаточно запустить build (Файл html)

ЗАПОЛНЕНИЕ ДАННЫМИ
------------

Чтобы добавить свои карточки в слайдер необходимо добавить объект в файл asd.json следующего формата

      {
        "image": "{base64 код}",
        "company": "Компания «SleepBag»",
        "task": "Разработка интернет-магазина",
        "short_description": "Создали интернет-магазин по продаже автомобильных раскладушек и аксессуаров...",
        "url": "{url адрес}"
      }

КОНТАКТЫ
------------
### Сергей

Телеграмм: https://t.me/Drago0277

GitHub: https://github.com/Serg0277

Стек: Swift, UIKit

### Данил

Телеграмм: https://t.me/danbuch

GitHub: https://github.com/C0smoCat

Стек: JavaScript, TypeScript, NodeJS, SQL, C#

### Владимир

Телеграмм: https://t.me/gekt0r9

GitHub: https://github.com/GEKT0R9

Стек: PHP, SQL, Java, JavaScript, C#