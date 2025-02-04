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
