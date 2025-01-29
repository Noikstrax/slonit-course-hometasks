"use strict";

const RANGE_START = 1;
const RANGE_END = 100;

startGame();


function chooseRandomNumber() {
    let randomNumber = Math.floor(Math.random() * (RANGE_END - RANGE_START ) + RANGE_START);
    console.log("Компьютер 1 загадал число: 42.")
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



















































































































// function showGuessResult(guessResult) {
//     if (guessResult == "guessed") {
//         console.log('Компьютер 1: Угадал!');
//     } else if (guessResult == "more") {
//         console.log('Компьютер 1: Меньше.');
//     } else (guessResult = 'less') {
//         console.log('Компьютер 1: Больше.')
//     }
// }

// function binarySearchGuessNumber(min, max) {
//     guessNumber = Math.floor((min+max)/2);
//     console.log(`Компьютер 2: Пробую число ${guessNumber}}`);
//     return guessNumber;
// }
// function binarySearch(min, max, result, guessedNumber) {
//     if (result === undefined) {
//         return binarySearchGuessNumber(min, max);
//     } else if (result == "more") {
//         return binarySearchGuessNumber(min, guessedNumber);
//     }
// }

// function startGame(rangeStart, rangeEnd) {
//     let randomNumber = chooseRandomNumber();

//     let guessNumber = binarySearch(rangeStart, rangeEnd);

//     let guessResult = checkGuess(guessNumber);
//     showGuessResult(guessResult);
//     if (guessResult == "guessed") {
//         return;
//     } else if (guessResult == "more") {

//     }
// }

