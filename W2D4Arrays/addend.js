"use strict";
let prompt = require("prompt-sync")();

function addEnd(input) {
    let sum = input[0] + input[input.length-1];
    return sum;
}

let number = [30, 40, 50, 60, 70];

console.log("The sum of the first and last index is ", addEnd(number));

