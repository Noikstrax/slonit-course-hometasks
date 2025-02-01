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