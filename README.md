# slonit-course-hometasks

## Оглавление
- [Знакомство с разметкой md](#task-4)
    - [Конфигурация git](#task-4-1)
    - [Работа с репозиторием](#task-4-2)
- [Мини-игра: Секретное число](#task-6)
- [Легкая тренировка в именовании](#task-8)

## <a id="task-4">Знакомство с разметкой md</a>
### <a id="task-4-1">Конфигурация git</a>

#### Взаимодействие с git
Для взаимодействия с конфигурацией git используется команда  `git config`  
Данная команда может выполняться с различными флагами:
- На уровне системы: `--system`
- На уровне пользователя: `--global`
- На уровне проекта: `--local (по умолчанию)`

Для того, чтобы посмотреть текущие параметры конфигурации можно использовать флаг `--list` 
по умолчанию он выводит параметры из всех конфигов, для того чтобы выводить информацию о
конфига на определенном уровне можно использовать соответсвующие флаги, например:
`git config --list --global` выведет информацию о настройках конфигурации на уровне пользователя.

#### Псевдонимы для команд
Для создания псевдонима используется команда `git config alias.[названиеКоманды] [команда]` или для нескольких команд `git config alias.названиеКоманды ["!команда 1; команда2"]`  
Примеры команд: `git config --global alias.c config` или `git config --global alias.sayHi '!echo "Text1"; echo "Text2"'`

#### Справка с описанием команд
Для получения иинформации о команде используется команда `git help`, например
`git help config` выведет информацию о команде *config*

### <a id="task-4-2">Работа с репозиторием</a>

#### Взаимодействие с репозиторием
Для инициализации репозитория используется команда `git init`  
Для информации о текущем состоянии репозитория используется команда `git status`
Для добавления неотслеживаемых файлов или внесения в индекс измененных используется команда `git add <file>` данная команда поддерживает следующие флаги:  
- `--chmod=+x <file>` - изменяет выполнимость неотслеживаемого файла  
- `--f` - добавить файл, несмотря на ограничения git 
- `-p` - позволяет добавлят по отдельности каждый измененный элемент в файле  
- `-A` - добавит в индекс все изменения начиная с корня проекта

Для записи файлов в репозиторий используется команда `git commit` данная команда поддерживает следующие флаги:  
- `-m` - позволяет сразу указать комментарий к коммиту
- `--author=['author']` - указывает имя автора коммита  
- `--date=['...']` - указывает дату коммита
- `--a` - позволяет отправить коммит внеся все изменения в рабочей директории в индекс *(но игнорируются файлы, не отслеживаемые git)*  
Также, если указать названия файла можно добавить изменение без *git add* `git commit <file>` *(такие же ограничения как и у **-a**)*  

Для просмотра текущего коммита используется команда `git show` или определенного коммита ***(в идентификаторе коммита нужно указать минимум 4 символа)*** `git show [e740]` данная команда поддерживает следующие флаги:  
- `--pretty=fuller` - показывает полную информацию о коммите  
Для изменения прав файла используется команда `git update-index --chmod=+x <file>`  
Для того чтобы сбросить изменения в индексе используется команда `git reset HEAD <file>`    
Для удаления файлом используется команда `git rm <file>`  данная команда поддерживает следующие флаги:  
- `-r` - для удаления директории  
- `--cached` - позволяет удалить файл из индекса, но оставит в рабочем каталоге

Для переименования файлов используется команда `git mv <file1> <file2>`  
Для изменения названия ветки используется команда `git branch -M [name]`  
Для добавления удаленного репозитория используется команда `git remote add origin [link]`  
Для загрузки изменений используется команда `git push -u origin main`  

## <a id="task-6">Мини-игра: Секретное число</a>
### Условие:  
1. Первый компьютер загадывает случайное число от 1 до 100.  
2. Второй компьютер пытается угадать число.  
- Для угадывания второй компьютер использует стратегию бинарного поиска: он начинает с середины возможного диапазона и уточняет диапазон в зависимости от подсказок (Больше/Меньше).
#### [Мини-игра: Секретное число](https://github.com/Noikstrax/slonit-course-hometasks/tree/main/tasks/task6)
```
"use strict";

const RANGE_START = 1;
const RANGE_END = 100;

startGame();


function chooseRandomNumber() {
    let randomNumber = Math.floor(Math.random() * (RANGE_END - RANGE_START ) + RANGE_START);
    console.log(`Компьютер 1 загадал число: ${randomNumber}`);
    return randomNumber;
}

function checkGuess(guessedNumber, choosedNumber) {
    console.log(`Компьютер 2: Пробую число ${guessedNumber}.`)
    if (guessedNumber > choosedNumber) {
        console.log('Компьютер 1: Меньше.');
        return 'less';
    } else if (guessedNumber < choosedNumber) {
        console.log('Компьютер 1: Больше.');
        return 'more';
    } else {
        console.log('Компьютер 1: Угадал!');
        return 'guessed';
    }
}

function binarySearchGuessNumber(min, max, choosedNumber) {
    let guessedNumber = Math.floor((min + max) / 2);

    let guessResult = checkGuess(guessedNumber, choosedNumber);
    if (guessResult == "guessed") {
        return;
    } else if (guessResult == "less") {
        binarySearchGuessNumber(min, guessedNumber, choosedNumber);
    } else if (guessResult == "more") {
        binarySearchGuessNumber(guessedNumber, max, choosedNumber);
    }
}

function startGame() {
    let choosedNumber = chooseRandomNumber();
    binarySearchGuessNumber(RANGE_START, RANGE_END, choosedNumber);
}
```


## <a id="task-8">[Легкая тренировка в именовании](https://github.com/Noikstrax/slonit-course-hometasks/tree/main/tasks/task8)</a>

```
function getCustomersPurchasesSum(customersPurchases) {
    let customersPurchasesSum = 0;
    customersPurchases.forEach(customerPurchasesSum => {
      customersPurchasesSum += customerPurchasesSum;
    });
    return customersPurchasesSum;
  }
  
let customersPurchases = [10000, 20000, 30000];
console.log(getCustomersPurchasesSum(customersPurchases));
```












