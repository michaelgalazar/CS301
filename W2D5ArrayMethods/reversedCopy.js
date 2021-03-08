"use strict";

/* eslint-disable */

function reversedCopy(originalArray){

    console.log(originalArray);

    let copyArray = originalArray.slice();

    let n = originalArray.length;

    for(let i = 0; i < copyArray.length; i++){

        copyArray.splice(i, 1, originalArray[n-1-i]);
    }
    return copyArray;
}

const inputArray = [11, 22, 33, 44, 55, 66, 77];

console.log(reversedCopy(inputArray));