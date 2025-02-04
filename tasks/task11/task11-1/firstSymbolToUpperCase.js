"use strict";

function firstSymbolToUpperCase(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

let str = "hello";
console.log(firstSymbolToUpperCase(str));