let array = ['Яблоко', 'Апельсин', 'Яблоко', false];

function myIndexOf(array, item, from = 0) {
    let findedIndex = false;
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
