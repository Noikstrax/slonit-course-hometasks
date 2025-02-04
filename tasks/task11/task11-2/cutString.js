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
