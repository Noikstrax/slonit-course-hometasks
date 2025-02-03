"use strict";

let objectMethods = {
    getNumericSum(obj) {
        let sum = 0;
        for (let prop in obj) {
            if (typeof(obj[prop]) == "number") sum += obj[prop];
        }
        return sum;

    },
    getSortedByNumericNames(obj) {
        let objectArrayNumerics = [];
        let objectSortedNamesArray = [];
        for (let prop in obj) {
            if (typeof(obj[prop]) == "number") objectArrayNumerics.push(obj[prop]);
        }
        objectArrayNumerics.sort(function(a, b) {
            if (a > b) return -1;
            if (a == b) return 0;
            if (a < b) return 1;
        });

        for (let i = 0; i < objectArrayNumerics.length; i++) {
            for (let prop in obj) {
                if (obj[prop] != objectArrayNumerics[i]) continue;
                objectSortedNamesArray.push(prop);
                break;
            }

        }
    return objectSortedNamesArray;


    },
}

let object = {
    name: 'Vasya', 
    friends: 5, 
    likes: 19, 
    projects: 7
};


console.log(objectMethods.getNumericSum(object)); // 31
console.log(objectMethods.getSortedByNumericNames(object));// likes, projects, friends