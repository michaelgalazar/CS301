"use strict";

/* eslint-disable */


function mergeSortedArrays(firstArray, secondArray) {

    let newMergedArray = [];

    firstArray.sort(function (a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    });

    secondArray.sort(function (a, b) {
        return a - b;
    });

    for (let element of firstArray) {
        newMergedArray.push(element);
    }
    console.log(newMergedArray);

    let value = 0;
    for ( let i = 0; i < secondArray.length; i++) {

        value = secondArray.shift();

        for (let j = 0; j < newMergedArray.length; j++) {

            if (value <= newMergedArray[j]) {
                newMergedArray.splice(j, 0, value);
                break;
            }
        }
        
    }

    return newMergedArray;
}

const array1 = [12, 13, 5, 17, 28, 41, 44, 51];
const array2 = [7, 16, 19, 24, 3, 9, 38, 56];

console.log(mergeSortedArrays(array1, array2));