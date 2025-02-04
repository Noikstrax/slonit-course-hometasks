# slonit-course-hometasks

## Оглавление
- [Знакомство с разметкой md](#task-4)
    - [Конфигурация git](#task-4-1)
    - [Работа с репозиторием](#task-4-2)
- [Мини-игра: Секретное число](#task-6)
- [Легкая тренировка в именовании](#task-8)
- [Массивы и методы по работе с ними](#task-9)
- [Повторяем объекты](#task-10)
- [Работа со строками](#task-11)
- [Функциональные выражения](#task-13)
- [Стрелочные функции](#task-14)


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


## <a id="task-9">[Массивы и методы по работе с ними](https://github.com/Noikstrax/slonit-course-hometasks/tree/main/tasks/task9)</a>

### [mySlice](https://github.com/Noikstrax/slonit-course-hometasks/tree/main/tasks/task9/mySlice)
```
"use strict";
let array = ["t", "e", "s", "t"];
function mySlice(array, start, end) {
    let slicedArray = [];

    if (start == undefined && end == undefined || start == 0 && end == undefined) return array;
    if (start >= 0 && end == undefined) {
        for (let i = start; i < array.length; i++) {
            slicedArray.push(array[i]);
        }
    } else if (start < 0 && end == undefined) {
        for (let i = start; i < 0; i++) {
            slicedArray.push(array[array.length + i]);
        }
    } else if (start && end || start >= 0 && end) {
        for (let i = start; i < end; i++) {
            slicedArray.push(array[i]);
        }
    }
    
    return slicedArray;
}

alert(mySlice(array, 0)); // test
alert(mySlice(array)); // test
alert(mySlice(array, -3)); // est
alert(mySlice(array, 1, 3)); // es
alert(mySlice(array, 0, 3)) // tes
```
### [myIndexOf](https://github.com/Noikstrax/slonit-course-hometasks/tree/main/tasks/task9/myIndexOf)
```
"use strict";
let array = ['Яблоко', 'Апельсин', 'Яблоко', false];

function myIndexOf(array, item, from = 0) {
    let findedIndex = false;
    if (from < 0) from = array.length + from;
    for (let i = from; i < array.length; i++) {
        if (array[i] === item) {
            findedIndex = i;
            break;
        }
    }
    return findedIndex === false ? -1 : findedIndex;
}

console.log( myIndexOf(array, 'Яблоко')); // 0
console.log( myIndexOf(array, 'Яблоко', 1)); // 2
console.log( myIndexOf(array, 'Яблок2141о')); // -1
console.log( myIndexOf(array, false)); // 3
console.log( myIndexOf(array, false, -3)); // 3
```

### [myIncludes](https://github.com/Noikstrax/slonit-course-hometasks/tree/main/tasks/task9/myIncludes)

```
"use strict";
let array = ['Яблоко', 'Апельсин', 'Яблоко', false, NaN];

function myIncludes(array, item, from = 0) {
    let range = array.length;
    if (from < 0) from = array.length + from;

    for (let i = from; i < array.length; i++) {
        if (isNaN(array[i]) && typeof(item) === 'number') return true;
        if (array[i] === item) return true;
    }
    return false;
}


console.log( myIncludes(array, 'Яблоко')); // true
console.log( myIncludes(array, 'Яблоко', 1)); // true
console.log( myIncludes(array, false, -3)); // true
console.log( myIncludes(array, NaN)); // true
console.log( myIncludes(array, 'Яблоко', -1)); // false
```


## <a id="task-10">[Повторяем объекты](https://github.com/Noikstrax/slonit-course-hometasks/tree/main/tasks/task10)</a>

```
"use strict";

let objectMethods = {
    getNumericSum(obj) {
        let sum = 0;
        for (let prop in obj) {
            if (typeof(obj[prop]) == "number") sum += obj[prop];
        }
        return sum;

    },
    // *
    getSortedByNumericNames(obj) {
        let objectArrayNumerics = [];
        let objectSortedNamesArray = [];
        for (let prop in obj) {
            if (typeof(obj[prop]) == "number") objectArrayNumerics.push(obj[prop]);
        }
        objectArrayNumerics.sort(function(a, b) {
            if (a > b) return -1;
            if (a == b) return 0;
            if (a < b) return 1;
        });

        for (let i = 0; i < objectArrayNumerics.length; i++) {
            for (let prop in obj) {
                if (obj[prop] != objectArrayNumerics[i]) continue;
                objectSortedNamesArray.push(prop);
                break;
            }

        }
    return objectSortedNamesArray;


    },
}

let object = {
    name: 'Vasya', 
    friends: 5, 
    likes: 19, 
    projects: 7
};


console.log(objectMethods.getNumericSum(object)); // 31
console.log(objectMethods.getSortedByNumericNames(object));// likes, projects, friends

```

## <a id="task-11">[Работа со строками](https://github.com/Noikstrax/slonit-course-hometasks/tree/main/tasks/task11)</a>

### [Задание 1](https://github.com/Noikstrax/slonit-course-hometasks/tree/main/tasks/task11/task11-1)
```
"use strict"
function firstSymbolToUpperCase(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

let str = "hello";
console.log(firstSymbolToUpperCase(str));
```

### [Задание 2](https://github.com/Noikstrax/slonit-course-hometasks/tree/main/tasks/task11/task11-2)
```
"use strict";

function cutString(str, length) {
    if (str.length > length) {
        let string = str.slice(0, length);
        let cutSymbols = [' ', ',', '.', '!', '?', ':', ';'];
        let substringEnd = 0;
        for (let symbol of cutSymbols) {
            if (string.lastIndexOf(symbol) > substringEnd) {
                substringEnd = string.lastIndexOf(symbol);
            }
        }
        return string.slice(0, substringEnd) + "…";
    } else {
        return str;
    }
    

}

console.log(cutString('Вот, что мне хотелось бы сказать на эту тему:', 20)); // Вот, что мне…
console.log(cutString('Всем привет!', 20)); // Всем привет
```

### [Задание 3](https://github.com/Noikstrax/slonit-course-hometasks/tree/main/tasks/task11/task11-3)


```
"use strict";

function isMutualSubstring(str1, str2) {
    return (str1.includes(str2)) ? true :
    (str2.includes(str1)) ? true : false;
}


let string1 = 'Дверь машина собака';
let string2 = 'машина';
let string3 = 'Дом';

console.log(isMutualSubstring(string1, string2)); // true
console.log(isMutualSubstring(string2, string1)); // true

console.log(isMutualSubstring(string1, string3)); // false
```
## <a id="task-13">[Функциональные выражения](https://github.com/Noikstrax/slonit-course-hometasks/tree/main/tasks/task13)</a>

### [Простой калькулятор](https://github.com/Noikstrax/slonit-course-hometasks/tree/main/tasks/task13)
```
"use strict";

const operationMultiply = function (a, b) {
    return a * b;
};

const operationDivide = function (a, b) {
    return a / b;
};

const operationAdd = function (a, b) {
    return a + b;
};

const operationSubtract = function (a, b) {
    return a - b;
};


const operations = {
    multiply: operationMultiply,
    divide: operationDivide,
    add: operationAdd,
    subtract: operationSubtract
};

function calculate(a, b, operationFunction) {
    return operationFunction(a, b);
}

let selectedOperation = "multiply";
console.log(calculate(6, 3, operations[selectedOperation])); // 18

selectedOperation = "add";
console.log(calculate(6, 3, operations[selectedOperation])); // 9

selectedOperation = "divide";
console.log(calculate(6, 3, operations[selectedOperation])); // 2

selectedOperation = "subtract";
console.log(calculate(6, 3, operations[selectedOperation])); // 3

```

## <a id="task-14">[Стрелочные функции](https://github.com/Noikstrax/slonit-course-hometasks/tree/main/tasks/task14)</a>

### [Функция myFilter](https://github.com/Noikstrax/slonit-course-hometasks/tree/main/tasks/task14)
```
"use strict";

function myFilter(array, callback) {
    let resultArray = [];
    for (let item of array) {
        if (callback(array[item])) resultArray.push(array[item]);
    }
    return resultArray;
}

let numbers = [1, 2, 3, 4, 5];

const greaterThanThree = myFilter(numbers, (number) => {
    return number > 3;
});

const evenNumbers = myFilter(numbers, (number) => {
    return number % 2 == 0;
});

console.log(greaterThanThree); // [4, 5]
console.log(evenNumbers); // [2, 4]
console.log(numbers); // [1, 2, 3, 4, 5]


```


