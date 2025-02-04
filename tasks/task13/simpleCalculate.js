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


