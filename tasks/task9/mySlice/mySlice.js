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