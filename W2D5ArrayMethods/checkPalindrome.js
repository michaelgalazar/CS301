"use strict";
/* eslint-disable */

function isArrayEqual(input) {

    let copy = [];

    for (let i = 0; i < input.length / 2; i++) {
        copy.push(input[i]);
    }

    for (let j = 0; j < copy.length; j++) {
        if (input.pop() !== copy[j]) {
            return false;
        }
    }
    return true;
}

const palindromArray = ["we", "are", "learning", "are", "we"];

console.log(isArrayEqual(palindromArray));