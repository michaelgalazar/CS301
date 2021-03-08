"use strict";
/*eslint-disable*/
/**
 * 
 * @param {*} firstArray 
 * @param {*} secondArray 
 * @returns 
 */

function isArrayEqual(firstArray, secondArray) {

    if (firstArray.length !== secondArray.length) {
        return false;
    }

    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] !== secondArray[i]) {
            return false;
        }
    }
    return true;
}

const array1 = [45, 62, 67, 12];
const array2 = [12, 67, 62, 45];

console.log(isArrayEqual(array1, array2));
