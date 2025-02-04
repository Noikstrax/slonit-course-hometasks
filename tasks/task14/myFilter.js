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
