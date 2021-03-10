"use strict";

/* eslint-disable */

function sumFirst(data) {
    let sum = 0;

    for( let value of data ) {
        sum += value[0]; 
    }
    return sum;
}

const arr = [[1, 2], [3, 4], [5, 6]];

console.log(sumFirst(arr));
