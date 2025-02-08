"use strict";

function createRandomGenerator(min, max) {
    return function () {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

let randomGenerator = createRandomGenerator(0, 10);
console.log(randomGenerator());
console.log(randomGenerator());
console.log(randomGenerator());
